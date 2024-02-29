const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const MONGO_URI =
      "mongodb+srv://faisal:7869@nodeexpressprojects.hzzjns1.mongodb.net/Some?retryWrites=true&w=majority&appName=NodeExpressProjects";
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
