import express from "express";
import { creteNewUser, getUser, deleteUser, updateUser } from "../controllers/user.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
export const userRouter = express.Router();

userRouter.route('/')
    .get(getUser)
    .post(creteNewUser)
    .delete(isLoggedIn, deleteUser)
    .patch(isLoggedIn, updateUser)