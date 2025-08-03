import express from "express";
import { handleLogin, handleLogout } from "../controllers/auth_controller.js";
const authRouter = express.Router();

authRouter.post("/auth/login", handleLogin);
authRouter.get("/auth/logout", handleLogout);

export default authRouter;