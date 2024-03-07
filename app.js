import 'dotenv/config'
import express from "express";
const app = express();
import mongoose from "mongoose";
import { connectDB } from "./utils.js";
// importing routers
import { userRouter } from "./routes/user.js";
import { todoRouter } from "./routes/todo.js";
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
// connect DB
connectDB(process.env.MONGO_URL);

// routes
app.use('/user', userRouter);
app.use('/todo', todoRouter);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});



app.listen(PORT, ()=> console.log('server listening on port 8000'));