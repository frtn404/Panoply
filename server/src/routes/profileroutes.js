const express = require("express");
const { createProviderProfile, getProviderProfile } = require("../controllers/profilecontroller");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/provider", protect, createProviderProfile);
router.get("/provider/:id", getProviderProfile);

module.exports = router;