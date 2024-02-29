# Task Manager Cheat Sheet

## Table of Contents

1. [Controllers](#controllers)
   - [task.js](#taskjs)
2. [Database](#database)
   - [connect.js](#connectjs)
3. [Errors](#errors)
   - [custom-error.js](#custom-errorjs)
4. [Middleware](#middleware)
   - [async.js](#asyncjs)
   - [error-handler.js](#error-handlerjs)
   - [not-found.js](#not-foundjs)
5. [Models](#models)
   - [Task Model](#task-model)
6. [Routes](#routes)
   - [task.js](#taskjs-route)
7. [App Configuration](#app-configuration)
   - [app.js](#appjs)

---

Sure, here's the updated Markdown content with an index at the top:

markdown
Copy code

# Task Manager Cheat Sheet

## Table of Contents

1. [Controllers](#controllers)
   - [task.js](#taskjs)
2. [Database](#database)
   - [connect.js](#connectjs)
3. [Errors](#errors)
   - [custom-error.js](#custom-errorjs)
4. [Middleware](#middleware)
   - [async.js](#asyncjs)
   - [error-handler.js](#error-handlerjs)
   - [not-found.js](#not-foundjs)
5. [Models](#models)
   - [Task Model](#task-model)
6. [Routes](#routes)
   - [task.js](#taskjs-route)
7. [App Configuration](#app-configuration)
   - [app.js](#appjs)

---

<!-- ## Index

1. [Controllers](#controllers)
2. [Database](#database)
3. [Errors](#errors)
4. [Middleware](#middleware)
5. [Models](#models)
6. [Routes](#routes)
7. [App Configuration](#app-configuration)

--- -->

## Controllers

### task.js

```javascript
const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }

  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
});
const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }

  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
```

---

## Database

### connect.js

```javascript
const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
```

---

## Errors

### custom-error.js

```javascript
class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode);
};

// {}

module.exports = { createCustomError, CustomAPIError };
```

---

## Middleware

### async.js

```javascript
const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = asyncWrapper;
```

### error-handler.js

```javascript
const { CustomAPIError } = require("../errors/custom-error");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;
```

### not-found.js

```javascript
const notFound = (req, res) => {
  res.status(404).send("Route does not exist");
};
module.exports = notFound;
```

---

## Models

### Task Model

```javascript
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
```

---

## Routes

### task.js (Route)

```javascript
const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
```

---

## App Configuration

### app.js

```javascript
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
```
