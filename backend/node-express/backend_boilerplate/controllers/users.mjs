import CustomError from "../errors/custom-error.mjs";
import User from "../models/user.mjs";
import "express-async-errors";

const getAllUsers = async (req, res) => {
  const users = await User.find({});

  res.status(200).json({ success: true, nbHits: users.length, data: users });
};

export { getAllUsers };
