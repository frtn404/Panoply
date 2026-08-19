const express = require("express");
const {
    createServiceRequest,
    getServiceRequest,
    getMyServiceRequests,
    updateServiceRequestStatus,
    getAvailableRequests,
    respondToRequest
} = require("../controllers/serviceRequestController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createServiceRequest);
router.get("/my", protect, getMyServiceRequests);
router.get("/available", protect, getAvailableRequests);
router.get("/:id", protect, getServiceRequest);
router.patch("/:id/status", protect, updateServiceRequestStatus);
router.patch("/:id/respond", protect, respondToRequest);

module.exports = router;