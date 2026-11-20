import express from "express";
import { addWishlist, getWishlist, deleteWishlist } from "../controller/wishlistController.js";

const router = express.Router();

router.post("/add", addWishlist);
router.get("/", getWishlist);
router.delete("/:id", deleteWishlist);

export default router;
