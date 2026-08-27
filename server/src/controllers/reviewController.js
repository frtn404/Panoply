const prisma = require("../config/prisma");
const axios  = require("axios");

const ML_SERVICE_URL = process.env.ML_SERVICE_URL || "http://localhost:8000";

const createReview = async (req, res) => {
    try {
        const { jobId, rating, comment } = req.body;

        if (!jobId || !rating) {
            return res.status(400).json({
                message: "jobId and rating are required."
            });
        }

        if (rating < 1 || rating > 5) {
            return res.status(400).json({
                message: "Rating must be between 1 and 5."
            });
        }

        // Find the job
        const job = await prisma.serviceRequest.findUnique({
            where: { id: parseInt(jobId) },
            include: { customer: true, provider: true }
        });

        if (!job) {
            return res.status(404).json({ message: "Job not found." });
        }

        if (job.customerId !== req.user.id) {
            return res.status(403).json({
                message: "Only the customer can review this job."
            });
        }

        if (job.status !== "completed") {
            return res.status(400).json({
                message: "Job must be completed before reviewing."
            });
        }

        // Check if already reviewed
        const existing = await prisma.review.findFirst({
            where: { jobId: parseInt(jobId) }
        });

        if (existing) {
            return res.status(409).json({
                message: "This job has already been reviewed."
            });
        }

        // Get sentiment score from ML service
        let sentimentScore = null;
        let isFlagged      = false;

        if (comment) {
            try {
                const mlRes = await axios.post(
                    `${ML_SERVICE_URL}/sentiment`,
                    { text: comment },
                    { timeout: 3000 }
                );
                sentimentScore = mlRes.data.score;
                isFlagged      = mlRes.data.flagged;
            } catch {
                // ML unavailable — continue without sentiment
            }
        }

        // Create review
        const review = await prisma.review.create({
            data: {
                jobId:          parseInt(jobId),
                reviewerId:     req.user.id,
                providerId:     job.providerId,
                rating,
                comment,
                sentimentScore,
                isFlagged
            }
        });

        // Update provider average rating
        const allReviews = await prisma.review.findMany({
            where: { providerId: job.providerId }
        });

        const avgRating = allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;

        await prisma.providerProfile.update({
            where: { userId: job.providerId },
            data: { averageRating: Math.round(avgRating * 10) / 10 }
        });

        res.status(201).json({
            message: "Review submitted successfully.",
            review
        });

    } catch (error) {
        console.error("Create review error:", error.message);
        res.status(500).json({ message: "Something went wrong." });
    }
};

const getMyReviews = async (req, res) => {
    try {
        const reviews = await prisma.review.findMany({
            where: { reviewerId: req.user.id },
            include: {
                provider: {
                    select: { fullName: true, email: true }
                }
            },
            orderBy: { createdAt: "desc" }
        });

        res.status(200).json({ reviews });

    } catch (error) {
        console.error("Get my reviews error:", error.message);
        res.status(500).json({ message: "Something went wrong." });
    }
};

const getProviderReviews = async (req, res) => {
    try {
        const reviews = await prisma.review.findMany({
            where: { providerId: parseInt(req.params.id) },
            include: {
                reviewer: {
                    select: { fullName: true }
                }
            },
            orderBy: { createdAt: "desc" }
        });

        const avgRating = reviews.length > 0
            ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
            : 0;

        res.status(200).json({
            reviews,
            averageRating: Math.round(avgRating * 10) / 10,
            totalReviews:  reviews.length
        });

    } catch (error) {
        console.error("Get provider reviews error:", error.message);
        res.status(500).json({ message: "Something went wrong." });
    }
};

module.exports = {
    createReview,
    getMyReviews,
    getProviderReviews
};