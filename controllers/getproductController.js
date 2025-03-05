import product from "../models/product.js";
  

export const getproductController = async (req, res) => {
    try {
        const products = await product.find();
        res.status(200).json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch products.' });
    }
};
