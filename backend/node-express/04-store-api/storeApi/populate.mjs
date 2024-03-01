import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import Product from "./models/product.mjs";
// Specify the type attribute for JSON import
import jsonProducts from "./products.json" assert { type: "json" };

const populateDB = async () => {
  try {
    const MONGO_URI = process.env.MONGODB_URI;
    await mongoose.connect(MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("Data Populated Successfully");
    process.exit(0);
  } catch (error) {
    console.error(error.message);
    process.exit(1); // Exit process with failure
  }
};

populateDB();
