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
// .then(() => console.log("CONNECTED TO THE DB..."))
// .catch((error) => console.log(error));
// main()
//   .then(() => console.log("CONNECTED TO THE DB..."))
//   .catch((error) => console.log(error));

// async function main() {
//   await mongoose.connect(connectionString, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   });
// }
