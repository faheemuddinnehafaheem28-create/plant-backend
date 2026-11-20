import express from "express";
import { addReview, getReviewByPlant } from "../controller/reviewController.js";

const router = express.Router();

router.post("/", addReview);
router.get("/:plantId", getReviewByPlant);

export default router;