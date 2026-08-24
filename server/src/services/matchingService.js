/**
 * Panoply Provider Matching Service
 *
 * Two-stage matching pipeline:
 *   Stage 1 — Rule-based: filter by category, availability, 20km radius
 *   Stage 2 — ML ranking: send to Python FastAPI for improved ranking
 *
 * Falls back to rule-based ranking if ML service is unavailable.
 */

const prisma = require("../config/prisma");
const axios  = require("axios");

const MAX_RADIUS_KM = 20;
const ML_SERVICE_URL = process.env.ML_SERVICE_URL || "http://localhost:8000";

// ── Haversine formula ──────────────────────────────────────
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R    = 6371;
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a    =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

const toRadians = (degrees) => degrees * (Math.PI / 180);

// ── Weighted scoring formula ───────────────────────────────
const calculateScore = (rating, completedJobs, distanceKm) => {
    return (rating * 0.5) + (completedJobs * 0.3) - (distanceKm * 0.2);
};

// ── Main matching function ─────────────────────────────────
const findMatchingProviders = async (category, customerLat, customerLon) => {
    // Stage 1 — Rule-based filtering
    const providers = await prisma.providerProfile.findMany({
        where: {
            category:    category,
            isAvailable: true
        },
        include: {
            user: {
                select: {
                    id:       true,
                    fullName: true,
                    email:    true,
                    phone:    true
                }
            }
        }
    });

    if (providers.length === 0) return [];

    // Calculate distance and rule-based score for each provider
    const scoredProviders = providers
        .map((provider) => {
            const distanceKm = calculateDistance(
                customerLat, customerLon,
                provider.latitude, provider.longitude
            );
            const score = calculateScore(
                provider.averageRating,
                provider.completedJobsCount,
                distanceKm
            );
            return {
                providerId:         provider.user.id,
                fullName:           provider.user.fullName,
                email:              provider.user.email,
                phone:              provider.user.phone,
                category:           provider.category,
                averageRating:      provider.averageRating,
                completedJobsCount: provider.completedJobsCount,
                isAvailable:        provider.isAvailable,
                distanceKm:         Math.round(distanceKm * 10) / 10,
                score:              Math.round(score * 100) / 100
            };
        })
        .filter((p) => p.distanceKm <= MAX_RADIUS_KM)
        .sort((a, b) => b.score - a.score);

    if (scoredProviders.length === 0) return [];

    // Stage 2 — ML ranking
    try {
        const mlResponse = await axios.post(
            `${ML_SERVICE_URL}/rank-providers`,
            { category, providers: scoredProviders },
            { timeout: 3000 }  // 3 second timeout — fall back if ML is slow
        );

        const mlProviders = mlResponse.data.providers;

        // Merge ML scores back into provider objects
        return mlProviders.map((mlP) => {
            const original = scoredProviders.find(p => p.providerId === mlP.providerId);
            return {
                ...original,
                mlScore:       mlP.mlScore,
                ruleBasedScore: mlP.ruleBasedScore
            };
        });

    } catch (error) {
        // ML service unavailable — fall back to rule-based ranking
        console.warn("ML service unavailable, using rule-based ranking:", error.message);
        return scoredProviders;
    }
};

module.exports = {
    findMatchingProviders,
    calculateDistance,
    calculateScore
};