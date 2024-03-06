import { verifyToken } from "../services/token.js";

export async function isLoggedIn(req, res, next) {
    const bearerToken = req.headers['authorization'];
    if (bearerToken) {
        const token = bearerToken.split(' ')[1];
        let userObject = verifyToken(token);
        if (userObject.success) {
            req.user = { isLoggedIn: true, type: "verifiedUser", user: userObject.decoded }
            next();
        }
        else {
            return res.send({ status: false, type: "invalidToken" })
        }
    } else {
        return res.send({ status: false, type: "noToken" })
    }
}