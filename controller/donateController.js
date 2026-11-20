import Donation from "../models/Donation.js";

export const postDonation = async(req , res) => {
    try{
        const donation = new Donation(req.body);
        await donation.save();
        return res.status(201).json(donation);
    }catch(err){
        return res.status(400).json({error: err.message});
    }
};

export const getDonation = async (req , res) => {
    try{
         const donations = await Donation.find();
         return res.status(200).json(donations);
    }catch(err){
        return res.status(500).json({error: err.message});
    }
};

export const deleteDonation = async (req, res) => {
    try{
        await Donation.findByIdAndDelete(req.params.id);
        return res.status(200).json({message: "Donation delete succesfully"});
    }catch(err){
        return res.status(500).json({error: err.message});
    } 
};