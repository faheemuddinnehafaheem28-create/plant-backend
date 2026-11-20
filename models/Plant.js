import mongoose from  'mongoose';

const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    light: {
        type: String
    },
    space: {
        type: String
    },
    water: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    fitScore: {
        type: String
    },
    price: {
        type: Number,
        default: 500
    },
    stock: {
        type: Number,
        required: true,
        default: 10
    },
},{timestamps: true});
const Plant = mongoose.model('Plant', plantSchema);
export default Plant;