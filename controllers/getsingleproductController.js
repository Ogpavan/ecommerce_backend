import Product from "../models/product.js";
import mongoose from "mongoose";

export const getsingleproductController = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if `id` exists and is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching the product" });
  }
};
