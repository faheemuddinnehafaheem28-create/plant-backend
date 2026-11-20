import Order from "../models/Order.js";
import Plant from "../models/Plant.js";

//Order Create
export const createOrder = async (req , res) => {
    try{
        const {plantId, quantity, orderItems} = req.body;
        if(plantId){
            const plant = await Plant.findById(plantId);
            if(!plant){
                return res.status(404).json({message: "Plant not found"});
            }
            if(plant.stock < (quantity || 1)){
                return res.status(400).json({message: `${plant.name} is Out of Stock! Only
                     ${plant.stock} left`});
            }
            plant.stock -=(quantity || 1);
            await plant.save();
        }
        if(orderItems && orderItems.length > 0){
            for(let item of orderItems){
                const plant = await Plant.findById(item.plantId || item._id);
                if(plant){
                    if(plant.stock < item.quantity){
                        return res.status(400).json({message: `${plant.name} Out of Stock`});
                    }
                    plant.stock -= item.quantity;
                    await plant.save();
                }
            }
        }
        const newOrder = new Order(req.body);
        const orders = await newOrder.save();
        return res.status(201).json(orders);
    }catch(err){
        return res.status(500).json({message: "Order failed!", error: err.message});
    }
};

//get order
export const getAllOrders = async (req, res) => {
    try{
        const orders = await Order.find().sort({createdAt: -1});
        return res.status(200).json(orders);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
};

//Delete Order
export const deleteOrder = async (req, res) => {
    try{
        await Order.findByIdAndDelete(req.params._id);
        return res.status(200).json({message: "Order deleted successfully!"});
    }catch(err){
        return res.status(500).json({message: err.message});
    }
};

//Pending Delivered
export const updateOrderStatus = async (req, res) => {
    try{
        const {status} = req.body;
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {status: status},
            {new: true}
        );
        return res.json(updatedOrder);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
};