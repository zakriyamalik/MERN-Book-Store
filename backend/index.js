import express from "express"
import { PORT,mongoDBURL } from "./config.js"
import mongoose from 'mongoose'

const app= express();

app.get('/',(req,res)=>{
   return  res.status(234).send('Hello World');
})

// VhvrAyjB0biUfEop
mongoose
.connect(mongoDBURL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`App is listening to port: ${PORT}`);
    }) 
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log('Error connecting to MongoDB:', err);
})