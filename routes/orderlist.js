import express from "express";

import { createOrder } from "../controllers/ordersController.js";
const router = express.Router();

// Route for creating an order
router.post("/checkout", createOrder);

export default router;
