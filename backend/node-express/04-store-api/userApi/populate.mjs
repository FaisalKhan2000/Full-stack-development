import mongoose from "mongoose";
import { config } from "dotenv";
config();

import User from "./models/user.mjs";
import usersData from "./users.json" assert { type: "json" };

const populateDB = async () => {
  try {
    const MONGO_URI = process.env.MONGODB_URI;
    await mongoose.connect(MONGO_URI);
    await User.deleteMany();
    await User.create(usersData);
    console.log("Data populated successfully");
    process.exit(0);
  } catch (error) {
    console.log(error.message);
    process.exit(1); // exit with failure
  }
};

populateDB();
