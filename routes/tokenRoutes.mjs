import e from "express";
import { TokenController } from "../controllers/tokenController.mjs";

const tokenRouter = e.Router();

tokenRouter.get('/verify-token', TokenController.verifyToken);

export default tokenRouter;