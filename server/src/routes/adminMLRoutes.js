const express = require("express");
const { getDemandForecast } = require("../controllers/adminMLController");
const { protect }    = require("../middleware/authMiddleware");
const { restrictTo } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/demand-forecast", protect, restrictTo("admin"), getDemandForecast);

module.exports = router;