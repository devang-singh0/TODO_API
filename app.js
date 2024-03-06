import 'dotenv/config'
import express from "express";
const app = express();
import mongoose from "mongoose";
import { connectDB } from "./utils.js";
// importing routers
import { userRouter } from "./routes/user.js";
import { todoRouter } from "./routes/todo.js";

const PORT = process.env.PORT || 3000;

// parse body type url encoded
app.use(express.urlencoded({ extended: true }));

// connect DB
connectDB(process.env.MONGO_URL);

// routes
app.use('/user', userRouter);
app.use('/todo', todoRouter);

app.listen(PORT, ()=> console.log('server listening on port 8000'));