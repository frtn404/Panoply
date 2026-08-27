const axios = require("axios");

const ML_SERVICE_URL = process.env.ML_SERVICE_URL || "http://localhost:8000";

const CATEGORIES = [
    "Electrical", "Plumbing", "Cleaning", "AC_Repair",
    "Carpentry", "Generator", "Solar", "Painting"
];

const getDemandForecast = async (req, res) => {
    try {
        // Get current time details if not provided
        const now = new Date();
        const {
            dayOfWeek = now.getDay(),
            hourOfDay = now.getHours(),
            month     = now.getMonth() + 1,
            category  = null
        } = req.query;

        // If no category specified, forecast all categories
        const categoriesToCheck = category ? [category] : CATEGORIES;

        const forecasts = await Promise.all(
            categoriesToCheck.map(async (cat) => {
                const response = await axios.post(
                    `${ML_SERVICE_URL}/predict-demand`,
                    {
                        dayOfWeek: parseInt(dayOfWeek),
                        hourOfDay: parseInt(hourOfDay),
                        month:     parseInt(month),
                        category:  cat
                    },
                    { timeout: 3000 }
                );
                return response.data;
            })
        );

        // Sort by probability descending
        forecasts.sort((a, b) => b.probability - a.probability);

        res.status(200).json({
            forecasts,
            generatedAt: now.toISOString(),
            parameters: { dayOfWeek, hourOfDay, month }
        });

    } catch (error) {
        console.error("Demand forecast error:", error.message);
        res.status(500).json({
            message: "Could not generate demand forecast."
        });
    }
};

module.exports = { getDemandForecast };