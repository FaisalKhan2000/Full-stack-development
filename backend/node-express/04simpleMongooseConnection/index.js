// index.js

const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Use routes
app.use("/", userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
