const express = require("express");
const {
    createReview,
    getMyReviews,
    getProviderReviews
} = require("../controllers/reviewController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createReview);
router.get("/mine", protect, getMyReviews);
router.get("/provider/:id", getProviderReviews);

module.exports = router;