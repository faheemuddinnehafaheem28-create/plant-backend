import express from "express";
import { createOrder, getAllOrders, deleteOrder, updateOrderStatus } from "../controller/orderController.js";

const router = express.Router();

router.post("/post", createOrder);
router.get("/get", getAllOrders);
router.delete("/delete/:id", deleteOrder);
router.put("/update-status/:id", updateOrderStatus);

export default router;