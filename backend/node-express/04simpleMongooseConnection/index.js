// index.js

require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Use routes
app.use("/", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
