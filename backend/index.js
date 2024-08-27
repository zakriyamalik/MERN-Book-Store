import express from "express"
import { PORT,mongoDBURL } from "./config.js"
import mongoose from 'mongoose';
import { Book } from "./models/bookModel.js";

const app= express();

app.use(express.json());

app.get('/',(req,res)=>{
   return  res.status(234).send('Hello World');
})

// Route to save a book

app.post('/books',async(req,res)=>
{
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear 
        ){
            return res.status(400).send({message: "Please fill in all fields"})

        }
        const newBook={
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear
        }
        const book=await Book.create(newBook)
        return res.status(201).send(book);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});

    }
})

// Route to Get all Books from Database
app.get('/books',async(req,res)=>
    {
    try{
        const books=await Book.find({});
        return res.status(200).json({
            count:books.length,
            data:books
        });
        }
        catch(error)
        {
            console.log(error.message);
            res.status(500).send({message:error.message});
        }
 });
              


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