import mongoose from "mongoose";

const testimonialsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String
    },
    message: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    rating: {
        type: Number,
        default: 5
    },
}, {timestamps: true});

const Testimonial = mongoose.model("Testimonials", testimonialsSchema);
export default Testimonial;