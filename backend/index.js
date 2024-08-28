import express from "express"
import { PORT,mongoDBURL } from "./config.js"
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/bookRoutes.js';

const app= express();

app.use(express.json());
//app.use(cors());

app.get('/',(req,res)=>{
   return  res.status(234).send('Hello World');
})

app.use('/books',booksRoute);


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