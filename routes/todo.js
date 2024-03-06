import express from "express";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import { getTodo, createNewTodo, updateTodo, deleteTodo, getTodoById } from "../controllers/todo.js";
export const todoRouter = express.Router();

todoRouter.route('/')
    .all(isLoggedIn)
    .get(getTodo)
    .post(createNewTodo)
    .delete(deleteTodo)
    .patch(updateTodo)

todoRouter.get('/:id',isLoggedIn, getTodoById)