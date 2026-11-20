import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
    try{
        const newItem = await Cart.create(req.body);
        return res.status(201).json(newItem);
    }catch(err){
        return res.status(500).json({error: err.message});
    }
};

export const getCart = async (req, res) => {
    try{
        const carts = await Cart.find();
        return res.json(carts);
    }catch(err){
        return res.status(500).json({error: err.message});
    }
};