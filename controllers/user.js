import { User } from "../models/user.js";
import { setToken } from "../services/token.js";
import { addBlackListToken } from "../services/token.js";
export function creteNewUser(req, res) {
    try {
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
            .then((createdUser) => {
                let token = setToken(createdUser.toObject());
                res.status(201).send({ status: "success", id: token })
            })
            .catch(() => {
                res.send({ status: "failed", msg: "user exists or wrong details" })
            })
    } catch {
        res.status(500).send({ error: 'Internal server error' })
    }
}

export async function getUser(req, res) {
    try {
        let user = await User.findOne({ email: req.body.email, password: req.body.password });
        if (user) {
            let token = setToken(user.toObject());
            res.send({ status: "success", token: token });
        } else {
            res.send({ status: false, msg: 'no user found' })
        }
    } catch (error) {
        res.status(501).send({ msg: 'internal server error' });
        console.log(error);
    }
}

export async function deleteUser(req, res) {
    try {
        let user = await User.findOne({ email: req.body.email, password: req.body.password });
        if (user) {
            let deletedUser = await User.findByIdAndDelete(user._id);
            addBlackListToken(req.token)
            res.send({ status: "user deleted" });
        } else {
            res.send({ status: false, msg: 'no user found' })
        }
    } catch (error) {
        res.status(501).send({ msg: 'internal server error' });
        console.log(error);
    }
}

export async function updateUser(req, res) {
    try {
        if(req.user.isLoggedIn){
                let newUser = await User.findByIdAndUpdate(req.user.user._id, req.body, {new: true});
                let token = setToken(newUser.toObject());
                if(newUser){
                    res.send({status: true, newUser: newUser, newToken: token});
                }else{
                    res.send({status: false, msg: 'no user found, use right token'})
                }
        }
    } catch (error) {
        res.status(501).send({ msg: 'internal server error' });
        console.log(error);

    }
}