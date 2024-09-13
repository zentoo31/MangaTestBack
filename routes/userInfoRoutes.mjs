import e from "express";
import { userInfoController } from "../controllers/userInfoController.mjs";

const userInfoRouter = e.Router();

userInfoRouter.get('/headers', userInfoController.getHeaderInfo);

export default userInfoRouter;