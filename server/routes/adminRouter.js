import express from "express";
const router = express.Router();
import upload from "../utils/multer.js";
import { products } from "../models/productModel.js"
import cloudinary from "../utils/cloudinary.js";

router.post('/addProducts', upload.single('image'), async (req, res) => {
    const { name, stock, price } = req.body
    cloudinary.uploader.upload(req.file.path).then((result) => {
        products.create({
            name,
            stock,
            price,
            image: result.secure_url,
        }).then((newProduct) => {
            res.status(200).json({
                success: true,
                message: "success new product created",
                product: newProduct,
            });
        }).catch(err => {
            res.status(500).json({ error: err });
        })
    }).catch(err => {
        res.status(500).json({ error: err });
    })
})


export default router;