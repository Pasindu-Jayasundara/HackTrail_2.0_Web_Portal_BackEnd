import express from "express";
import { getUsers } from "../controllers/user_controller.js";
import { checkUserExists } from "../middleware/checkUserExists.js";
const userRouter = express.Router();

userRouter.get("/users", checkUserExists, getUsers);

export default userRouter;

