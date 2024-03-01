import express from "express";
import connectDB from "./db/connect.mjs";
import errorHandler from "./middleware/error-handler.mjs";
import notFound from "./middleware/not-found.mjs";
import productsRouter from "./routes/products.mjs";
import { config } from "dotenv";
config();

const app = express();

// Connect to MongoDB
connectDB();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/products", productsRouter);

// Middleware
app.use(errorHandler);

// Route for home page
app.get("/", (req, res) => {
  res.send("<h1>Welcome to home page</h1>");
});

app.use(notFound);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
