import express from "express";
import { createContact, getContacts } from "../controller/contactController.js";

const router = express.Router();

router.post("/post", createContact);
router.get("/get", getContacts);

export default router;
