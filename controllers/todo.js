import { Todo } from "../models/todo.js";

export async function getTodo(req, res) {
    try {
        let todos = await Todo.aggregate([
            {
                $lookup: {
                    from: 'users', // Name of the User collection
                    localField: 'user',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            {
                $unwind: '$user'
            }
        ])
        res.send({ todos })
    } catch (err) {
        res.status(501).send('internal server error')
    }
}

export async function createNewTodo(req, res) {
    try {
        let todo = await Todo.create({ ...req.body, user: req.user.user._id })
        res.send({ status: true, todo: todo })
    } catch (error) {
        res.status(501).send({ msg: 'internal server error' });
        console.log(error);
    }
}

export async function updateTodo(req, res) {
    try {
        if (req.body.todoId) {
            let todo = await Todo.findByIdAndUpdate(req.body.todoId, req.body, { new: true });
            if (!todo) {
                return res.send({ status: false, msg: 'wrong todo id' })
            }
            return res.send({ status: true, updatedTodo: todo });
        }
        else {
            res.send({ status: false, msg: 'no todoId provided' })
        }
    } catch (err) {
        res.status(501).send('internal server error');
        console.log("error", err);
    }
}

export async function deleteTodo(req, res) {
    try {
        if (req.body.todoId) {
            const todo = await Todo.findByIdAndDelete(req.body.todoId);
            if (!todo) {
                res.send({ status: false, msg: 'wrong todo id' });
            } else {
                res.send({ status: true, msg: 'todo deleted' });
            }
        }
        else {
            res.send({ status: false, msg: 'no todoId provided' })
        }
    } catch (err) {
        res.status(501).send('internal server error');
        console.log(err);
    }
}

export async function getTodoById(req, res) {
    try {
        if (/^[0-9a-fA-F]{24}$/.test(req.params.id)) {
            let todo = await Todo.findOne({ _id: req.params.id, user: req.user.user._id });
            if (todo) {
                return res.send({ status: true, todo: todo })
            } else {
                return res.status(401).send({ status: false, msg: "not Authorized or invalid todoId" })
            }
        } else {
            return res.status(401).send({ status: false, msg: "not Authorized or invalid todoId" })
        }
    } catch (err) {
        res.status(501).send("internal server error")
        console.log(err)
    }
}