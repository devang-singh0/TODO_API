// helper functions here

import mongoose, { mongo } from "mongoose";

export function connectDB(){
    mongoose.connect('mongodb://localhost:27017/todo').then(()=>{
        console.log('db connected')
    }).catch((err)=>{
        console.log('error', err)
    })
}