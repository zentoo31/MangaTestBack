import userSchema from "../schemas/userSchema.mjs";
import bcrypt from "bcrypt";
import { SALT_ROUNDS } from "../config/config.mjs";
export class UserModel{

    static async registerUser({username,password, email}){
        const existingUser = await userSchema.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {throw new Error('El nombre de usuario o el correo electrónico ya están en uso.');}
        if (password < 9 ) {throw new Error('La contraseña debe ser de 8 caracteres o mayor');;}

        const hashedPassword = await bcrypt.hash(password, parseInt(SALT_ROUNDS));
        const newUser = new userSchema({username,password: hashedPassword, email});
        await newUser.save();
        return true;
    }

    static async loginUser({email, password}){
        const existingUser = await userSchema.findOne({email});
        if (!existingUser) {throw new Error('El usuario no existe');}

        const isValid = await bcrypt.compare(password, existingUser.password);
        if (!isValid) throw new Error("contraseña incorrecta");
        console.log("Usuario autenticado:", existingUser);

        return {
            _id: existingUser._id,
            email: existingUser.email,
            username: existingUser.username,
            role: existingUser.role
        };
    }

    static async infoUser({ _id }) {
        const user = await userSchema.findOne({ _id });
        if (!user) {
            throw new Error('El usuario no existe');
        }
        return {
            _id: user._id,
            email: user.email,
            profile_photo: user.profile_photo,
            username: user.username,
            role: user.role
        };
    }

}