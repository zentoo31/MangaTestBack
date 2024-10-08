import { UserModel } from "../models/user.mjs";
import { SECRET_KEY } from "../config/config.mjs";
import jwt from "jsonwebtoken";

export class UserController {
    static async registerUser(req, res){
        if (!req.body) {
            return res.status(400).json({message: 'Falta cuerpo de la solicitud'});
        }
        const {username, password, email} = req.body;
        try {
            const userCreated = await UserModel.registerUser({username,password,email});
            res.send(userCreated);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async loginUser(req,res){
        if (!req.body) {
            return res.status(400).json({message: 'Falta cuerpo de la solicitud'});
        }
        const {email, password} = req.body;
        try {
            res.clearCookie('access_token');
            const user = await UserModel.loginUser({email,password});
            const token = jwt.sign({id: user._id, username: user.username}, SECRET_KEY,{
                expiresIn: '1h'
            });
            res
                .cookie('access_token', token,{
                    httpOnly: true,
                    sameSite: 'lax',
                    maxAge: 1000 * 60 * 60
                })
                .send({user});
                console.log("Token generado para el usuario:", user);
        } catch (error) {
            res.status(401).json({message: error.message});            
        }
    }

    static async logout(req,res){
        try {
            res.clearCookie('access_token', {
                httpOnly: true,
                sameSite: 'lax'
            })
            .status(200)
            .json({ message: 'Sesión cerrada exitosamente' });
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async infoUser(req, res) {        
        if (!req.user || !req.user._id) {  // Asegúrate de que el campo es _id
            return res.status(401).json({ message: 'No autenticado' });
        }
        const { _id } = req.user;
        try {
            const user = await UserModel.infoUser({ _id });  
            res.send(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}