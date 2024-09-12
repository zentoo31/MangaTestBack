import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/config.mjs";

export class TokenController{
    static async verifyToken(req,res){
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(401).json(false);
        }
        try {
            await jwt.verify(token, SECRET_KEY);
            res.json(true);
        } catch (error) {
            res.status(401).json(false,error.message);
        }
    }
}