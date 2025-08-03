import express from "express";
import { registerUser, registerTeam } from "../controllers/register_controller.js";
const registerRouter = express.Router();

registerRouter.post("/registration/team", registerTeam);
registerRouter.post("/registration/user", registerUser);

export default registerRouter;