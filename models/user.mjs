import userSchema from "../schemas/userSchema.mjs";
import bcrypt from "bcrypt";
import { SALT_ROUNDS } from "../config/config.mjs";
export class UserModel{
    static async checkIfUserExists(username){
        const exists = await userSchema.exists({username : username});
        return exists !== null;
    }

    static async registerUser({username,password, email}){
        const existingUser = await userSchema.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            throw new Error('El nombre de usuario o el correo electrónico ya están en uso.');
        }
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        const newUser = new userSchema({username,hashedPassword, email});
        await newUser.save();
        return newUser;
    }
}