import { teamModel } from "../models/team.js";

const getUsers = async (req, res) => {
  try {
    const allUsers = await teamModel.aggregate([
      { $unwind: "$members" },
      {
        $project: {
          team_id: 1,
          name: "$members.name",
          email: "$members.email",
          tg: "$members.tg",
          level: "$members.level",
          gender: "$members.gender",
          phone_no: "$members.phone_no",
        },
      },
    ]);

    res.status(200).send(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error finding Users" });
  }
}

export {
    getUsers
}