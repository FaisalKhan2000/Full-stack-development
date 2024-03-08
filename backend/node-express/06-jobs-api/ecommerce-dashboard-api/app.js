require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

// connectDB
const connectDB = require("./db/connect");
connectDB();

// authentication
const authenticateUser = require("./middleware/authentication");

// routers
const authRouter = require("./routes/auth");
const productRouter = require("./routes/dashboard");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("jobs api");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", authenticateUser, productRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
