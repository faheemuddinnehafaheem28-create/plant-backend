import { data } from "react-router-dom";
import Wishlist from "../models/Wishlist.js";

export const addWishlist = async (req, res) => {
    try{
        const {plantId} = req.body;
        const exists = await Wishlist.findOne({plantId});
        if(exists){
            return res.status(400).json({message: "Already in wishlist!"});
        }
        const newItem = new Wishlist(req.body);
        await newItem.save();
        return res.status(201).json({message: "Added to Wishlist ❤️", data: newItem});
    }catch(err){
        return res.status(500).json({error: err.message});
    }
};

export const getWishlist = async (req, res) => {
    try{
        const wishlists = await Wishlist.find()
        return res.json(wishlists);
    }catch(err){
        return res.status(500).json({error: err.message});
    }
};

export const deleteWishlist = async (req, res) => {
    try{
        await Wishlist.findByIdAndDelete(req.params.id);
        return res.json({message: "Removed from wishlist"});
    }catch(err){
        return res.status(500).json({error: err.message});
    }   
};