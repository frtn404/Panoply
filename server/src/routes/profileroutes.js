const express = require("express");
const {
    createProviderProfile,
    getProviderProfile,
    updateProviderProfile,
    updateCustomerProfile,
    getCustomerProfile
} = require("../controllers/profilecontroller");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/provider", protect, createProviderProfile);
router.get("/provider/:id", getProviderProfile);
router.patch("/provider", protect, updateProviderProfile);
router.patch("/customer", protect, updateCustomerProfile);
router.get("/customer/:id", getCustomerProfile);

module.exports = router;