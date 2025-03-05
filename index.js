import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"; 
 
import productRoutes from "./routes/productRoutes.js";
import getproductsRoutes from "./routes/getproductRoutes.js";
import getsingleproduct from "./routes/getsingleproduct.js";
import deleteProduct from "./routes/deleteproductRoutes.js";
import ordersRoutes from "./routes/ordersRoutes.js";
import OrderModel from "./models/orderModel.js";


const app = express();

app.use(bodyParser.json());
app.use(cors());



dotenv.config();


mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
})

app.get('/', (req, res) => {
    res.send("Hello World");
})
 
app.use('/api', productRoutes);
app.use('/api',getproductsRoutes);
app.use('/api',getsingleproduct);
app.use('/api',deleteProduct);

app.post("/api/create-order", async (req, res) => {
    try {
       // Debug incoming data
      const { amount, clientDetails, cartItems, userId } = req.body;
  
      if (!amount || !clientDetails || !cartItems || !userId) {
        return res.status(400).json({ error: "Missing required fields." });
      }
  
      const order = new OrderModel({
        amount,
        currency: "INR",
        orderId: "razorpay_order_id_placeholder", // Replace later with Razorpay order ID
        clientDetails,
        cartItems,
        userId,
      });
  
      await order.save();
      res.status(200).json({ success: true, order });
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  });
  
  

app.use('/api',ordersRoutes);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})