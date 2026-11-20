import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    plantName: {
        type: String
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number,
        required: false,
        default: 500
    },
    totalPrice: {
        type: Number
    },
    customerName: {
        type: String
    },
    phone: {
        type: String
    },
    location: {
        type: String
    },
    paymentMethod: {
        type: String, default: "COD",
    },  
    status: {
        type: String,
        enum: ["Pending", "Delivered"],
        default: "Pending"
    },
}, {timestamps: true});

const Order = mongoose.model("Order", orderSchema);
export default Order;