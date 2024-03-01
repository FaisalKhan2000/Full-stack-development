import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "user name must be provided"],
  },
  age: {
    type: Number,
    required: [true],
  },
  email: {
    type: String,
    required: [true],
  },
  phoneNumber: {
    type: Number,
    required: [true],
  },
  address: {
    street: {
      type: String,
      required: [true, "Street must be provided"],
    },
    city: {
      type: String,
      required: [true, "City must be provided"],
    },
    state: {
      type: String,
      required: [true, "State must be provided"],
    },
    zip: {
      type: String,
      required: [true, "ZIP code must be provided"],
      // Example of validation for a US ZIP code (5 digits)
      validate: {
        validator: (value) => {
          return /^\d{5}$/.test(value);
        },
        message: "Invalid ZIP code",
      },
    },
    country: {
      type: String,
    },
  },
  isActive: {
    type: Boolean,
    required: [true],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", userSchema);
