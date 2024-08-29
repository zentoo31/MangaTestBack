import e from "express";
import { UserController } from "../controllers/userController.mjs";

const userRouter = e.Router();

userRouter.post('/register', UserController.registerUser);
userRouter.post('/login', UserController.loginUser);

export default userRouter;