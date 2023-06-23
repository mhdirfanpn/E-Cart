import express, { application } from "express";
const router = express.Router();
import { users } from '../models/userModel.js';
import { products } from "../models/productModel.js";
import { cart } from "../models/cartModel.js";




router.post('/register', async (req, res) => {
    const { email } = req.body;
    users.create({
        email
    }).then((newUser) => {
        res.status(200).json({
            success: true,
            message: "success new user created",
            user: newUser,
        });
    }).catch(err => {
        res.status(500).json({ error: err });
    })
})

router.get('/getProducts', (req, res) => {
    products.find().then((prod) => {
        res.status(200).json({
            success: true,
            message: "products sent success",
            products: prod,
        });
    }).catch(err => {
        res.status(500).json({ error: err });
    })
})

router.patch('/addToCart/:id', async (req, res) => {
    try {
        const productId = req.params.id; 
        const { email } = req.body;
        const user = await users.findOne({ email })
       const product = await products.findByIdAndUpdate(productId, { $inc: { stock: -1 } })
        const proObj = {
            item: productId,
            quantity: 1,
            price: product.price,
        };
        const userCart = await cart.findOne({ user: user._id })
        if (userCart) {
            let proExist = userCart.cartProducts.findIndex(
                (cartProducts) => cartProducts.item == productId
            );
            console.log(proExist);
            if (proExist != -1) {
                await cart.updateOne(
                    { user: user, "cartProducts.item": productId },

                    {
                        $inc: {
                            "cartProducts.$.quantity": 1,
                            "cartProducts.$.price": product.price,
                        },
                    }
                )
            } else {
                await cart.updateOne(
                    { user: user._id },
                    {
                        $push: {
                            cartProducts: proObj,
                        },
                    }
                )
            }
        } else {
            let cartObj = {
                user: user._id,
                cartProducts: [proObj],
            };
            console.log(cartObj);
            await cart.create(cartObj);
        }
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred.' });
    }
});



router.get('/cartCount', async (req, res) => {
    try {
        const { email } = req.query;
    const user = await users.findOne({ email })
    const userId = user._id

    cart.findOne({ user: userId }, { cartProducts: 1 })
        .then((result) => {
            if (result) {
                const cartProducts = result.cartProducts;
                const totalQuantity = cartProducts.reduce((sum, cartProduct) => sum + cartProduct.quantity, 0);
                console.log("Total Quantity:", totalQuantity);
                res.json(totalQuantity)
                
            } else {
                console.log("Cart not found for the user.");
               
            }
        })
        .catch((error) => {
            console.log(error);
        });
    } catch (error) {
        console.log(error);
    }
    

})

router.get('/getCart', async (req, res) => {
    try {
    const { email } = req.query;
    const user = await users.findOne({ email });
    console.log(user);
    const isCart = await cart.findOne({user:user._id})
    if(!isCart) return res.json({message:"not cart found"})
    const userId = user._id;
    console.log(userId);

    cart.aggregate([
        {
            $match: { user: userId },
        },
        {
            $unwind: "$cartProducts",
        },
        {
            $addFields: {
                itemId: { $toObjectId: "$cartProducts.item" } // Convert item field to ObjectId
            }
        },
        {
            $lookup: {
                from: "products",
                localField: "itemId",
                foreignField: "_id",
                as: "cartItems",
            },
        },
        {
            $project: {
                _id: 1,
                item: "$cartProducts.item",
                quantity: "$cartProducts.quantity",
                price: "$cartProducts.price",
                product: { $arrayElemAt: ["$cartItems", 0] },
            },
        },
    ]).then((cartItems) => {
            res.json(cartItems)
        })
       
    } catch (error) {
        console.log(error);
    }
    
});

router.post('/deleteProduct', async (req, res) => {
    const {id, quantity, userEmail} = req.body
    const user =await users.findOne({email:userEmail})
    console.log(id,user._id);

    cart.updateOne(
        { user: user._id },
        { $pull: { cartProducts: { item: id } } }
    )
        .then(() => {
            products.findByIdAndUpdate(id,{
                $inc:{"stock":quantity}
            }).then((response)=>{
                res.json(response)
            })
            .catch((err)=>console.log(err))           
        })
        .catch((err) => {
            console.error(err);
        });
})




export default router;