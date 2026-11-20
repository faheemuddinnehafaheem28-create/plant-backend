import express from "express";
import { postTestimonial, getTestimonial } from "../controller/testimonialController.js";

const router = express.Router();

router.post("/post", postTestimonial);
router.get("/get", getTestimonial);

export default router;