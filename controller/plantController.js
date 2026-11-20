import Plant from '../models/Plant.js';

export const getPlants = async (req , res)=>{
    try{
        const plants = await Plant.find({});
        return res.json(plants);

    }catch(err){
        return res.status(500).json({message: err.message});
    }
}
export const quizPlants = async (req , res)=>{
    try{
        const { light, space } = req.body;
        const plants = await Plant.find({light, space});
        return res.json(plants);

    }catch(err){
        return res.status(500).json({message: err.message});
    }
}
export const addPlant = async (req , res)=>{
    try{
        const {name, light, space, water, description, price, fitScore, stock} = req.body;
        const plants = await Plant.create({name, light, space, water, description, price, 
            fitScore, stock});
        return res.status(201).json(plants);

    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

export const updatePlant = async (req, res) => {
    try{
        const plant = await Plant.findById(req.params.id);
        if(!plant) return res.status(404).json({message: "Plant not found"});
        plant.stock = req.body.stock;
        await plant.save();
        return res.json(plant);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}