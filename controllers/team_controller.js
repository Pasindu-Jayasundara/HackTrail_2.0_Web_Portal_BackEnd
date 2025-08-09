import { teamModel } from "../models/Team.js";

const getAllTeams = async (req, res) => {
  try {
    const allTeams = await teamModel.find({}, { _id: 0, __v: 0 });
    res.status(200).send(allTeams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Finding Teams" });
  }
}

const getTeam = async (req, res) => {
  try {
    const teamId = req.params.id;
    const team = await teamModel.findOne(
      { team_id: teamId },
      { _id: 0, __v: 0 }
    );

    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }

    res.status(200).send(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error registering Team" });
  }
}

const updateTeam = async (req, res) => {
  try {
    const teamId = req.params.id;
    const team = req.body
    const updatedTeam = await teamModel.findOneAndUpdate({team_id : teamId}, team);

    if (!updatedTeam) {
      return res.status(404).json({ message: "Team not found" });
    }

    res.status(200).json({
      message : "successfully updated"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Updating Team" });
  }
}

const deleteTeam = async (req, res) => {
  try {
    const teamId = req.params.id;
    const team = req.body
    const deletedTeam = await teamModel.findOneAndDelete({team_id : teamId});

    if (!deletedTeam) {
      return res.status(404).json({ message: "Team not found" });
    }

    res.status(200).json({
      message : "successfully deleted"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Updating Team" });
  }
}

export {
    getAllTeams,
    getTeam,
    updateTeam,
    deleteTeam
}