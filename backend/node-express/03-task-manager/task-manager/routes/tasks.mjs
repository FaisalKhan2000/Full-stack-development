import express from "express";
import {
  getAllTasks,
  createTask,
  getSingleTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.mjs";

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getSingleTask).delete(deleteTask).patch(updateTask);

export default router;
