const express = require("express");
const {
    initializePayment,
    verifyPayment,
    releasePayment,
    getPaymentStatus
} = require("../controllers/paymentController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/initialize",        protect, initializePayment);
router.get("/verify/:reference",  protect, verifyPayment);
router.patch("/release/:jobId",   protect, releasePayment);
router.get("/status/:jobId",      protect, getPaymentStatus);

module.exports = router;