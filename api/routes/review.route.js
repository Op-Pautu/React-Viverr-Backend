const express = require("express");
const verifyToken = require("../middleware/jwt");
const router = express.Router();
const {
  createReview,
  deleteReview,
  getReviews,
} = require("../controllers/review.controller");

router.post("/", verifyToken, createReview);
router.get("/:id", getReviews);
router.delete("/:id", verifyToken, deleteReview);
