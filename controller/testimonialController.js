import Testimonial from "../models/Testimonials.js";

export const postTestimonial = async (req , res) => {
    try{
        const testimonial = new Testimonial(req.body);
        await testimonial.save();
        return res.status(201).json(testimonial);
    }catch(err){
        return res.status(400).json({error: err.message});
    }
};

export const getTestimonial = async (req , res) => {
    try{
        const testimonials = await Testimonial.find();
        return res.status(200).json(testimonials);
    }catch(err){
        return res.status(500).json({error: err.message});
    }
};