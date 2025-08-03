import express from "express";
import { checkAuthorized } from "../middleware/checkAuthorized.js";
import { getAllTeams, getTeam, updateTeam, deleteTeam } from "../controllers/team_controller.js";
const teamRouter = express.Router();

teamRouter.get("/teams", getAllTeams);
teamRouter.get("/teams/:id", getTeam);
teamRouter.put("/teams/:id", checkAuthorized, updateTeam);
teamRouter.delete("/teams/:id", checkAuthorized, deleteTeam);

export default teamRouter;