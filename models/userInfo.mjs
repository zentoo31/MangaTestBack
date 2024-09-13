import userSchema from "../schemas/userSchema.mjs";


export class userInfoModel{
    static async headerInfo({_id}){
        const user = await userSchema.findOne({_id});
        if(!user){throw new Error('El usuario no existe')}
        return{
            profile_photo: user.profile_photo,
            username: user.username,
        }
    }
}