import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    plantId: {type: String, required: true},
    plantName: {type: String},
    userName: {type: String, default: "Anonymouse"},
    rating: {type: Number, required: true, min: 1, max: 5},
    comment: {type: String},
},{timestamps: true});

const Review = mongoose.model("Review", reviewSchema);
export default Review;