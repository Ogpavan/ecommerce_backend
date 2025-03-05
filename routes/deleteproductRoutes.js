
import express from "express";
import { deleteProduct } from "../controllers/deletesingleproduct.js";

const router = express.Router();

// DELETE route to delete a product
router.delete("/items/:id", deleteProduct);


export default router;
