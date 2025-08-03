import { teamModel } from "../models/team.js";

export const checkUserExists = async (req, res, next) => {
  const email_ = req.query.email;
  
  if (!email_) return next();

  try {
    const user = await teamModel.findOne({ "members.email": email_ });

    if (!user) {
      return res
        .status(404)
        .json({ message: "user not found", userExist: false });
    }

    return res.status(200).json({
      message: "user exists",
      userExist: true,
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error finding Users" });
  }
};
