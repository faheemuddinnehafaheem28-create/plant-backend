import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//signup
export const signup = async(req , res, next)=> {
    try{
        const {name, email, password} = req.body;
        const exists = await User.findOne({email});
        if(exists) return res.status(400).json({message: "User already exists"});

        const user = await User.create({name, email, password});
        return res.status(201).json({success: true, message: "Signup Success", user});
    }catch(err){
        next(err);
    }
};
//login
export const login = async (req, res, next) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({meassge: "User not found", success: false});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: "Invalid credentials", success: false});

        const token = jwt.sign({id: user._id},
             process.env.JWT_SECRET || "plantmatch-super-secret-123",
        {expiresIn: "7d"});
        res.json({success: true, token, user});
    }catch(err){
        next(err);
    }
};
