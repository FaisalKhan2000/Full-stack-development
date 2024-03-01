import express from "express";
const router = express.Router();

import {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} from "../controllers/users.mjs";

router.route("/users").get(getAllUsers);
router.route("/user/:id").get(getUser).delete(deleteUser).patch(updateUser);
router.route("/user/").post(createUser);

export default router;
