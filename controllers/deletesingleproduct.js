import Product from "../models/product.js";

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    // Find and delete the product by ID
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({ message: "Error deleting product", error: err.message });
  }
};
