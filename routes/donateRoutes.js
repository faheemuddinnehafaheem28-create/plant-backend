import express from "express";
import { postDonation, getDonation, deleteDonation } from "../controller/donateController.js";

const router = express.Router();

router.post("/post", postDonation);
router.get("/get", getDonation);
router.delete("/delete/:id", deleteDonation);

export default router;