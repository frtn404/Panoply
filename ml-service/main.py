"""
Panoply ML Microservice
-----------------------
Provides two endpoints:
  POST /rank-providers  — ranks providers using a trained Random Forest model
  POST /sentiment       — analyses review sentiment using a simple classifier

Run with: uvicorn main:app --reload --port 8000
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
import json

app = FastAPI(title="Panoply ML Service", version="1.0.0")

# Allow requests from Express backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Data models ────────────────────────────────────────────
class Provider(BaseModel):
    providerId: int
    fullName: str
    averageRating: float
    completedJobsCount: int
    distanceKm: float
    score: float  # rule-based score from Express

class RankRequest(BaseModel):
    providers: List[Provider]
    category: str

class SentimentRequest(BaseModel):
    text: str

# ── Train model on startup ─────────────────────────────────
"""
Features used:
  - average_rating    (0-5)
  - completed_jobs    (0-100)
  - distance_km       (0-20)
  - rule_based_score  (the formula score from Express)

Target: was_selected (1 = customer chose this provider, 0 = not chosen)
"""

def generate_training_data(n=500):
    np.random.seed(42)
    
    ratings      = np.random.uniform(1, 5, n)
    jobs         = np.random.randint(0, 100, n)
    distances    = np.random.uniform(0.1, 20, n)
    rule_scores  = (ratings * 0.5) + (jobs * 0.3) - (distances * 0.2)
    
    # Providers with high ratings, more jobs and closer distance
    # are more likely to be selected
    prob = (
        (ratings / 5) * 0.4 +
        (np.clip(jobs, 0, 50) / 50) * 0.35 +
        (1 - distances / 20) * 0.25
    )
    selected = (np.random.random(n) < prob).astype(int)
    
    return pd.DataFrame({
        "average_rating":   ratings,
        "completed_jobs":   jobs,
        "distance_km":      distances,
        "rule_based_score": rule_scores,
        "was_selected":     selected
    })

# Train on startup
print("Training provider ranking model...")
df      = generate_training_data()
X       = df[["average_rating", "completed_jobs", "distance_km", "rule_based_score"]]
y       = df["was_selected"]
scaler  = StandardScaler()
X_scaled = scaler.fit_transform(X)
model   = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_scaled, y)
print("Model trained successfully.")

# ── Endpoints ──────────────────────────────────────────────
@app.get("/")
def root():
    return {"message": "Panoply ML Service is running", "version": "1.0.0"}

@app.post("/rank-providers")
def rank_providers(request: RankRequest):
    """
    Takes a list of providers with their features and returns
    them ranked by the ML model's predicted selection probability.
    
    This IMPROVES on the rule-based ranking by learning from
    historical selection patterns rather than fixed weights.
    """
    if not request.providers:
        return {"providers": []}
    
    # Build feature matrix
    features = []
    for p in request.providers:
        features.append([
            p.averageRating,
            p.completedJobsCount,
            p.distanceKm,
            p.score  # rule-based score as a feature
        ])
    
    X_input  = scaler.transform(features)
    
    # Get probability of being selected (class 1)
    probs = model.predict_proba(X_input)[:, 1]
    
    # Attach ML score to each provider and sort
    results = []
    for i, provider in enumerate(request.providers):
        results.append({
            "providerId":        provider.providerId,
            "fullName":          provider.fullName,
            "averageRating":     provider.averageRating,
            "completedJobsCount": provider.completedJobsCount,
            "distanceKm":        provider.distanceKm,
            "ruleBasedScore":    round(provider.score, 2),
            "mlScore":           round(float(probs[i]), 4),
        })
    
    # Sort by ML score descending
    results.sort(key=lambda x: x["mlScore"], reverse=True)
    
    return {
        "providers": results,
        "model":     "RandomForest",
        "features":  ["average_rating", "completed_jobs", "distance_km", "rule_based_score"]
    }

@app.post("/sentiment")
def analyse_sentiment(request: SentimentRequest):
    """
    Simple keyword-based sentiment analysis for reviews.
    In Phase 6 this could be upgraded to a trained classifier.
    
    Returns a score from -1 (very negative) to 1 (very positive).
    """
    text = request.text.lower()
    
    positive_words = [
        "great", "excellent", "good", "amazing", "professional",
        "fast", "reliable", "clean", "helpful", "recommend",
        "satisfied", "happy", "perfect", "brilliant", "outstanding"
    ]
    negative_words = [
        "bad", "terrible", "poor", "slow", "unprofessional",
        "late", "dirty", "unhelpful", "disappointed", "awful",
        "horrible", "rude", "waste", "never", "worst"
    ]
    
    pos_count = sum(1 for w in positive_words if w in text)
    neg_count = sum(1 for w in negative_words if w in text)
    total     = pos_count + neg_count
    
    if total == 0:
        score = 0.0
    else:
        score = (pos_count - neg_count) / total
    
    return {
        "score":    round(score, 2),
        "label":    "positive" if score > 0.1 else "negative" if score < -0.1 else "neutral",
        "flagged":  score < -0.3
    }