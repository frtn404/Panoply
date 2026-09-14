const express = require("express");
const {
    generateJobOtps,
    verifyJobOtp,
    getOtpStatus
} = require("../controllers/otpController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/:id/generate", protect, generateJobOtps);
router.post("/:id/verify",   protect, verifyJobOtp);
router.get("/:id/status",    protect, getOtpStatus);

module.exports = router;