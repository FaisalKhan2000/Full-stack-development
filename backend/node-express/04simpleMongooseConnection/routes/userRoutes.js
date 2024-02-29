// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Route to create a user
router.get("/create-user", async (req, res) => {
  try {
    const newUser = new User({
      username: "example_user2",
      email: "example@example.com",
      password: "password123",
    });
    await newUser.save();
    res.send("User Created Successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating user");
  }
});

module.exports = router;
