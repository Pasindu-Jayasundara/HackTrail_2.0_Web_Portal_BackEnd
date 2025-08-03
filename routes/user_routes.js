import express from "express";
import { getUsers } from "../controllers/user_controller.js";
const userRouter = express.Router();


userRouter.get("/users", getUsers);

export default userRouter;

