import express from "express";

import { getOrders, createOrder } from "../controllers/ordersController.js";

const router = express.Router();

router.get("/orders", getOrders);
router.post("/checkout", createOrder);

 export default router;
