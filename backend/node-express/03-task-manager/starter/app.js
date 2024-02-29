const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("task manager app");
});

app.use("/api/v1/tasks", tasks);

// app.get("/api/v1/tasks")           - get all the tasks
// app.post("/api/v1/tasks")          - create a new task
// app.get("/api/v1/tasks/:id")       -  get single task
// app.patch("/api/v1/tasks/:id")     - update task
// app.delete("/api/v1/tasks/:id")    - delete task

// middleware for not found route
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 8080;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`app running on port:${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
