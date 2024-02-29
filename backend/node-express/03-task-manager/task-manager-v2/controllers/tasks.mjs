import CustomAPIError from "../error/custom-error.mjs";
import Task from "../models/Task.mjs";
import "express-async-errors";

// get all task
const getAllTasks = async (req, res, next) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
};

// create task
const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

// get single task
const getSingleTask = async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  // if (!task) {
  //   throw new Error(`No task with id: ${taskID}`);
  // }
  if (!task) {
    throw new CustomAPIError(`No task with id: ${taskID}`, 404);
  }

  res.status(200).json({ task });
};

const deleteTask = async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    throw new CustomAPIError(`No task with id: ${taskID}`, 404);
  }
  res.status(200).json({ task });
};

const updateTask = async (req, res, next) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    throw new CustomAPIError(`No task with id: ${taskID}`, 404);
  }

  res.status(200).json({ task });
};

export { getAllTasks, createTask, getSingleTask, deleteTask, updateTask };

// const getAllTasks = asyncWrapper(async (req, res) => {
//   const tasks = await Task.find({});
//   res.status(200).json({ tasks });
// });
