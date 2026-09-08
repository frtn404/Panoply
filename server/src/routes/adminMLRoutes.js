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

module.exports = router;