const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for the product"],
      unique: true, // Assuming product names should be unique
      trim: true, // Removes whitespace from both ends of the string
    },
    description: {
      type: String,
      required: [true, "Please provide a description for the product"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price for the product"],
      min: [0, "Price cannot be negative"],
    },
    quantity: {
      type: Number,
      required: [true, "Please provide the quantity available"],
      min: [0, "Quantity cannot be negative"],
    },
    category: {
      type: String,
      required: [true, "Please provide a category for the product"],
      enum: ["Electronics", "Clothing", "Books", "Home", "Beauty", "Others"], // Example categories
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductsSchema);
