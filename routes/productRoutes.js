import express from 'express';
import upload from '../config/multer.js';
import { addProduct } from '../controllers/uploadProduct.js';

const router = express.Router();

// Route to add a product
router.post('/products', upload.array('images', 4), addProduct);

export default router;
