import Review from "../models/Review.js";

export const addReview = async (req, res) => {
    try{
        const {plantId, plantName, rating, comment, userName} = req.body;
        const review = new Review({plantId, plantName, rating, comment, userName});
        await review.save();
        return res.status(201).json(review);
    }catch(err){
        return res.status(500).json({error: err.message});
    }
};

export const getReviewByPlant = async (req, res) => {
    try{
        const reviews = await Review.find({plantId: req.params.plantId});
        return res.json(reviews);
    }catch(err){
        return res.status(500).json({error: err.message});
    }
};