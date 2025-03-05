
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  cartItems: [
    {
      id: String,
      name: String,
      price: Number,
      quantity: Number,
      size: String,
      images: [String],
    },
  ],
  subtotal: Number,
  shippingFee: Number,
  total: Number,
  createdAt: { type: Date, default: Date.now },
});


export default mongoose.model("Order", OrderSchema);
