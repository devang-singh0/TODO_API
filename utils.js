// helper functions here

import mongoose, { mongo } from "mongoose";

export function connectDB(url){
    mongoose.connect(url).then(()=>{
        console.log('db connected')
    }).catch((err)=>{
        console.log('error', err)
    })
}