import express from "express";
import connectDB from "./db/connect.mjs";
import tasks from "./routes/tasks.mjs";
import errorHandler from "./middlewares/error-handler.mjs";
import notFound from "./middlewares/not-found.mjs";
import { config } from "dotenv";
config();

const app = express();

// Connect to MongoDB
connectDB();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

// Middleware
app.use(errorHandler);

// Route for home page
app.get("/", (req, res) => {
  res.send("<h1>Welcome to home page</h1>");
});

app.use(notFound);

// app.get("/api/v1/tasks")           - get all the tasks
// app.post("/api/v1/tasks")          - create a new task
// app.get("/api/v1/tasks/:id")       -  get single task
// app.patch("/api/v1/tasks/:id")     - update task
// app.delete("/api/v1/tasks/:id")    - delete task

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
