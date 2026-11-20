import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
    plantId: {
        type: String,
        required: true
    },
    plantName: {
        type: String,
        required: true
    },
    plantPrice: {
        type: Number,
        required: true
    },
}, {timestamps: true});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);
export default Wishlist;