import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './src/config/db.js';

dotenv.config()
const app = express()
const PORT = process.env.PORT;
console.log(PORT);

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on ${PORT}`);
        
})
}).catch(()=>{
    console.log("An error occured on the server");
    
})