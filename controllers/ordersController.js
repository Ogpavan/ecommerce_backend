 
import orderModel from "../models/orderModel.js";



const getOrders = async (req, res) => {
  try {
    const orders = await orderModel.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};






// Create a new order
const createOrder = async (req, res) => {
  try {
    // Extracting userId from Firebase middleware or request body
    const userId = req.user?.uid || req.body.userId;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required to place an order." });
    }

    const { cartItems,clientDetails, subtotal, shippingFee, total } = req.body;

    const newOrder = new orderModel({
      userId, // Save userId in the order
      cartItems,
      clientDetails,
      subtotal,
      shippingFee,
      total,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({ message: "Order placed successfully", order: savedOrder });
  } catch (error) {
    res.status(500).json({ message: "Failed to place order", error });
  }
};



export { getOrders, createOrder };