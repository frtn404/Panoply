const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const prisma = require("../config/prisma");

const router = express.Router();

router.patch("/me", protect, async (req, res) => {
    try {
        const { fullName, phone } = req.body;

        const updated = await prisma.user.update({
            where: { id: req.user.id },
            data: {
                ...(fullName && { fullName }),
                ...(phone !== undefined && { phone })
            }
        });

        const { password, ...user } = updated;

        res.status(200).json({
            message: "Profile updated successfully.",
            user
        });

    } catch (error) {
        console.error("Update user error:", error.message);
        res.status(500).json({ message: "Something went wrong." });
    }
});

module.exports = router;