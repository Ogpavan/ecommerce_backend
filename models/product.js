import mongoose from "mongoose";


const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        subCategory: { type: String, required: true },
        price: { type: Number, required: true },
        sizes: { type: [String], required: true },
        bestSeller: { type: Boolean, default: false },
        images: { type: [String], required: true },
    },
    { timestamps: true }
);


export default mongoose.model('Product', productSchema);
