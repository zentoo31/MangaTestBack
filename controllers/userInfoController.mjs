import { userInfoModel } from "../models/userInfo.mjs";

export class userInfoController{
    static async getHeaderInfo(req,res){
        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: 'No autenticado' });
        }
        const { _id } = req.user;
        try {
            const header = await userInfoModel.headerInfo({_id});        
            res.send(header);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}