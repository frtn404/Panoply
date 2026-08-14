const prisma = require("../config/prisma");

const createProviderProfile = async (req, res) => {
    try {
        // Make sure the logged-in user is a provider
        if (req.user.role !== "provider") {
            return res.status(403).json({
                message: "Only providers can create a provider profile."
            });
        }

        const { category, bio, latitude, longitude } = req.body;

        // Category is required
        if (!category) {
            return res.status(400).json({
                message: "Trade category is required."
            });
        }

        // Check if profile already exists
        const existing = await prisma.providerProfile.findUnique({
            where: { userId: req.user.id }
        });

        if (existing) {
            return res.status(409).json({
                message: "Provider profile already exists."
            });
        }

        // Create the profile
        const profile = await prisma.providerProfile.create({
            data: {
                userId: req.user.id,
                category,
                bio,
                latitude,
                longitude
            }
        });

        res.status(201).json({
            message: "Provider profile created successfully.",
            profile
        });

    } catch (error) {
        console.error("Create provider profile error:", error);
        res.status(500).json({
            message: "Something went wrong."
        });
    }
};

const getProviderProfile = async (req, res) => {
    try {
        const profile = await prisma.providerProfile.findUnique({
            where: { userId: parseInt(req.params.id) },
            include: {
                user: {
                    select: {
                        fullName: true,
                        email: true,
                        phone: true
                    }
                }
            }
        });

        if (!profile) {
            return res.status(404).json({
                message: "Provider profile not found."
            });
        }

        res.status(200).json({ profile });

    } catch (error) {
        console.error("Get provider profile error:", error);
        res.status(500).json({
            message: "Something went wrong."
        });
    }
};

module.exports = {
    createProviderProfile,
    getProviderProfile
};