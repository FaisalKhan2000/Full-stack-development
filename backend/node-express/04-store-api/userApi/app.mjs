import express from "express";
import connectDB from "./db/connect.mjs";
import errorHandler from "./middleware/error-handler.mjs";
import notFound from "./middleware/not-found.mjs";
import usersRouter from "./routes/users.mjs";
import { config } from "dotenv";
config();

const app = express();

// Connect to MongoDB;
connectDB();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/", usersRouter);

// errorHandler middleware
app.use(errorHandler);

// Route for homepage
app.get("/", (req, res) => {
  res.send("<h1>Welcome to home page </h1>");
});

// notFound middleware
app.use(notFound);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
