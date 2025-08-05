import { teamModel } from "../models/team.js";

const registerUser = async (req, res) => {
  const teamId = req.body.team_id;
  const user = {
    name: req.body.name,
    email: req.body.email,
    tg: req.body.tg,
    level: req.body.level,
    gender: req.body.gender,
    phone_no: req.body.phone_no,
  };

  try {
    const team = await teamModel.findOne({ team_id: teamId });

    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }

    team.members.push(user);

    if (team.members.length >= 4) {
      return res.status(400).json({ error: "Team already has 4 members" });
    }

    const savedTeam = await team.save();

    res.status(200).json({
      message: "Successfully Registered",
      team: savedTeam,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error registering Team" });
  }
};

const registerTeam = async (req, res) => {
  try {

    if (req.body.members.length >= 4) {
      return res.status(400).json({ error: "Team exceeds 4 members" });
    }

    const createTeam = new teamModel(req.body);
    const savedTeam = await createTeam.save();

    res.status(201).json({
      message: "Successfully Registered",
      team: savedTeam,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error registering Team" });
  }
};

export { registerTeam, registerUser };
