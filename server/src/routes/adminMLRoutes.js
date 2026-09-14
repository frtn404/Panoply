const express = require("express");
const { getDemandForecast } = require("../controllers/adminMLController");
const { protect, restrictTo } = require("../middleware/authMiddleware");
const prisma = require("../config/prisma");

const router = express.Router();

router.use(protect, restrictTo("admin"));

router.get("/demand-forecast", getDemandForecast);

router.get("/stats", async (req, res) => {
    try {
        const [totalUsers, totalProviders, totalJobs, pendingProviders, openDisputes] =
            await Promise.all([
                prisma.user.count(),
                prisma.user.count({ where: { role: "provider" } }),
                prisma.serviceRequest.count(),
                prisma.user.count({ where: { role: "provider", status: "pending" } }),
                prisma.serviceRequest.count({ where: { status: "failed" } })
            ]);

        res.json({ totalUsers, totalProviders, totalJobs, pendingProviders, openDisputes });

    } catch (err) {
        console.error("Stats error:", err.message);
        res.status(500).json({ message: "Something went wrong." });
    }
});

router.get("/providers/pending", async (req, res) => {
    try {
        const providers = await prisma.user.findMany({
            where: { role: "provider", status: "pending" },
            orderBy: { createdAt: "asc" }
        });
        res.json({ providers });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong." });
    }
});

router.patch("/providers/:id/verify", async (req, res) => {
    try {
        await prisma.user.update({
            where: { id: parseInt(req.params.id) },
            data: { status: "active" }
        });
        res.json({ message: "Provider verified." });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong." });
    }
});

router.patch("/users/:id/suspend", async (req, res) => {
    try {
        await prisma.user.update({
            where: { id: parseInt(req.params.id) },
            data: { status: "suspended" }
        });
        res.json({ message: "User suspended." });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong." });
    }
});
// Blacklist a user
router.post("/blacklist", async (req, res) => {
    try {
        const { userId, reason } = req.body;

        if (!userId || !reason) {
            return res.status(400).json({
                message: "userId and reason are required."
            });
        }

        // Check user exists
        const user = await prisma.user.findUnique({
            where: { id: parseInt(userId) }
        });

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        // Check not already blacklisted
        const existing = await prisma.blacklist.findUnique({
            where: { userId: parseInt(userId) }
        });

        if (existing) {
            return res.status(409).json({
                message: "User is already blacklisted."
            });
        }

        const entry = await prisma.blacklist.create({
            data: {
                userId:        parseInt(userId),
                reason,
                blacklistedBy: req.user.id
            }
        });

        // Also suspend the user
        await prisma.user.update({
            where: { id: parseInt(userId) },
            data:  { status: "suspended" }
        });

        res.status(201).json({
            message: "User blacklisted successfully.",
            entry
        });

    } catch (err) {
        console.error("Blacklist error:", err.message);
        res.status(500).json({ message: "Something went wrong." });
    }
});

// Remove from blacklist
router.delete("/blacklist/:userId", async (req, res) => {
    try {
        await prisma.blacklist.delete({
            where: { userId: parseInt(req.params.userId) }
        });

        // Reinstate user
        await prisma.user.update({
            where: { id: parseInt(req.params.userId) },
            data:  { status: "active" }
        });

        res.status(200).json({ message: "User removed from blacklist." });

    } catch (err) {
        console.error("Remove blacklist error:", err.message);
        res.status(500).json({ message: "Something went wrong." });
    }
});

// Get all blacklisted users
router.get("/blacklist", async (req, res) => {
    try {
        const blacklist = await prisma.blacklist.findMany({
            include: {
                user: {
                    select: { fullName: true, email: true, role: true }
                }
            },
            orderBy: { createdAt: "desc" }
        });

        res.status(200).json({ blacklist });

    } catch (err) {
        console.error("Get blacklist error:", err.message);
        res.status(500).json({ message: "Something went wrong." });
    }
});

module.exports = router;