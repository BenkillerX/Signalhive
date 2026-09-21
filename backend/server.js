import "dotenv/config";
import express from 'express'
import { connectDB } from './src/config/db.js';
import authRoutes from "./src/modules/auth/auth.routes.js";
import cors from 'cors'
const app = express()
const PORT = process.env.PORT;
app.use(express.json())
app.use(cors())
app.use('/api/auth', authRoutes)
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on ${PORT}`);
        
})
}).catch(()=>{
    console.log("An error occured on the server");
    
})