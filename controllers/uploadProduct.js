
import Product from '../models/product.js';
import cloudinary from '../config/cloudinary.js';
import fs from 'fs';

// Add a new product
export const addProduct = async (req, res) => {
    try {
        const imageUploadPromises = req.files.map((file) =>
            cloudinary.uploader.upload(file.path, { folder: 'products' })
        );

        const uploadedImages = await Promise.all(imageUploadPromises);

        // Get URLs and cleanup local files
        const imageUrls = uploadedImages.map((img) => img.secure_url);
        req.files.forEach((file) => fs.unlinkSync(file.path)); // Clean up files

        // Save product to database
        const product = new Product({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            subCategory: req.body.subCategory,
            price: req.body.price,
            sizes: req.body.sizes.split(','),
            bestSeller: req.body.bestSeller === 'true',
            images: imageUrls,
        });

        await product.save();
        res.status(201).json({ message: 'Product added successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to upload product.' });
    }
};
