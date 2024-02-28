const express = require("express");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");
// Static assets
app.use(express.static("./methods-public"));

// Parse form data
app.use(express.urlencoded({ extended: false }));

// Parse JSON
app.use(express.json());

// Routing
app.use("/api/people", people);
app.use("/login", auth);

app.listen(8080, () => {
  console.log("Server is listening on port 8080....");
});
