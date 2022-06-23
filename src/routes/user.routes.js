import { Router } from "express";
import { createUser, listUser } from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/signup", createUser);
userRouter.get("", listUser);

export default userRouter;
