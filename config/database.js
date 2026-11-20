import mongoose from "mongoose";;

const connectDB = async()=>{
    try{
         await mongoose.connect("mongodb://localhost:27017/PlantUI");
         console.log("Database connected successfully");
    }catch(err){
        console.log(err.message);
    }
}
export default connectDB;