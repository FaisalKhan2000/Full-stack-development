import express from "express";
const router = express.Router();

import { getAllUsers } from "../controllers/users.mjs";

router.route("/").get(getAllUsers);

export default router;
