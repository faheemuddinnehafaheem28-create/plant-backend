import express from "express";
import { addToCart, getCart } from "../controller/cartController.js";

const router = express.Router();

router.post("/", addToCart);
router.post("/add", addToCart);
router.get("/", getCart);
router.get("/get", getCart);

export default router;