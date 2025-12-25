import mongoose from "mongoose";

// 1-create a Schema
// 2-model based on that scheme

const noteSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    content: {
        type: String,
        required:true,
    },
    
})