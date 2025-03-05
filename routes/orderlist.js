const express = require("express");
const router = express.Router();
const Order = require("../models/Order"); // Import your Order model

// Fetch all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find(); // Fetch all orders from MongoDB
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
