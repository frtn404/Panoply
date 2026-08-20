const { findMatchingProviders } = require("../services/matchingService");

const getMatchingProviders = async (req, res) => {
    try {
        const { category, latitude, longitude } = req.query;

        if (!category || !latitude || !longitude) {
            return res.status(400).json({
                message: "category, latitude and longitude are required."
            });
        }

        const providers = await findMatchingProviders(
            category,
            parseFloat(latitude),
            parseFloat(longitude)
        );

        if (providers.length === 0) {
            return res.status(200).json({
                message: "No providers found within 20km for this category.",
                providers: []
            });
        }

        res.status(200).json({
            message: `${providers.length} provider(s) found.`,
            providers
        });

    } catch (error) {
        console.error("Matching error:", error.message);
        res.status(500).json({
            message: "Something went wrong during provider matching."
        });
    }
};

module.exports = { getMatchingProviders };