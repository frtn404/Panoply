const express = require("express");
const { getMatchingProviders } = require("../controllers/matchingController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, getMatchingProviders);

module.exports = router;