import CustomError from "../errors/custom-error.mjs";
import User from "../models/user.mjs";
import "express-async-errors";

// GET
const getAllUsers = async (req, res) => {
  const users = await User.find({});

  res.status(200).json({ success: true, nbHits: users.length, data: users });
};

// POST
const getUser = async (req, res) => {
  // console.log(req.params);
  const { id: userId } = req.params;
  const user = await User.findOne({ _id: userId });

  if (!user) {
    throw new CustomError(`user with ID: ${userId} not exits`, 404);
  }

  res.status(200).json({ success: true, user });
};

// PUT
const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ success: true, data: user });
};

// DELETE

const deleteUser = async (req, res) => {
  const { id: userId } = req.params;
  const user = await User.deleteOne({ _id: userId });

  if (!user) {
    throw new CustomError(`user with ID: ${userId} not exits`, 404);
  }

  res.status(200).json({ success: true, user });
};

// UPDATE

const updateUser = async (req, res) => {
  const { id: userId } = req.params;

  const user = await User.findOneAndUpdate({ _id: userId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    throw new CustomError(`user with ID: ${userId} not exits`, 404);
  }

  res.status(200).json({ success: true, user });
};

export { getAllUsers, getUser, createUser, deleteUser, updateUser };
