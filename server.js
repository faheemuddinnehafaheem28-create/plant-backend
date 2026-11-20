import express, { application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import plantRoutes from './routes/plantRoutes.js';
import connectDB from './config/database.js';
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from './routes/authRoutes.js';
import donateRoutes from './routes/donateRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';
import orderRoutes from "./routes/orderRoutes.js";
import wishlistRoutes from "./routes/wishlistRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/plants', plantRoutes);
app.use('/api/contact', contactRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/donate", donateRoutes);
app.use("/api/testimonial", testimonialRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/reviews", reviewRoutes);


app.get('/',(req , res)=>{
    res.send("API is running");
});

const PORT = process.env.PORT || 7000;
connectDB();

app.listen(PORT,() =>{
    console.log(`Server is running on port 7000`);
});

