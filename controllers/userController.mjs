import { UserModel } from "../models/user.mjs";

export class UserController {
    static async registerUser(req, res){
        if (!req.body) {
            return res.status(400).json({message: 'Falta cuerpo de la solicitud'});
        }
        const {username, password, email} = req.body;
        try {
            const userCreated = UserModel.registerUser({username,password,email});
            res.send(userCreated);
        } catch (error) {
            console.error(error);
            res.status(500).send('Hubo un error');
        }
    }
}