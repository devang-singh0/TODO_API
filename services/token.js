import jwt from "jsonwebtoken";

const secretKey = 'FJTIKTIHKL';

export function setToken(user) {
    return jwt.sign(user, secretKey);
}

export function verifyToken(token) {
    if (isTokenBlacklisted(token)) return { success: false }
    try {
        const decoded = jwt.verify(token, secretKey);
        return { success: true, decoded };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export const tokenBlacklist = [];

export function addBlackListToken(token) {
    tokenBlacklist.push(token);
}


function isTokenBlacklisted(token) {
    return tokenBlacklist.includes(token);
}