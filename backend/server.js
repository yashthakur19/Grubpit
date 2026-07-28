import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import roomRoutes from "./routes/roomRoutes.js";

const app=express();
dotenv.config();
connectDB();
const port=process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Server is running');
});

app.use("/api/room",roomRoutes);

app.listen(port, ()=>{
    console.log('Server is running on port',port);
})