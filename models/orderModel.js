import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  orderId: { type: String, required: true },
  clientDetails: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: String, required: true },
    country: { type: String, required: true },
  },
  cartItems: { type: Array, required: true },
  status: { type: String, default: "pending" }, // Pending, Paid, etc.
  createdAt: { type: Date, default: Date.now },
});


export default mongoose.model("OrderModel", OrderSchema);
