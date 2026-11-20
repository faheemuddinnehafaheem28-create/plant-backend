import mongoose from "mongoose";

export const cartSchema = new mongoose.Schema({
    plantId: {type: String},
    plantName: {type: String},
    plantPrice: {type: String},
}, {timestamps: true});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;