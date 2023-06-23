import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true
      },
      image: {
        type: String
      },
      stock: {
        type: Number
      },
      price: {
        type: Number
      },
    },
    {
      timestamps: true
    }
  );
  

export const products = mongoose.model('products',ProductSchema);
