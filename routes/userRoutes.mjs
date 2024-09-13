import e from "express";
import { UserController } from "../controllers/userController.mjs";

const userRouter = e.Router();

userRouter.post('/register', UserController.registerUser);
userRouter.post('/login', UserController.loginUser);
userRouter.get('/getInfoUser', UserController.infoUser);
userRouter.post('/logout', UserController.logout)

export default userRouter;