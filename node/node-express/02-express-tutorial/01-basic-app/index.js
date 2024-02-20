// Importing the Express framework module
const express = require("express");

// Creating an Express application instance
const app = express();

// Importing the path module to work with file and directory paths
const path = require("path");

// Defining the port number for the server to listen on, defaulting to 8080 if not specified in environment variables
const PORT = process.env.PORT || 8080;

// Middleware to serve static files from the "public" directory
app.use(express.static("public"));

// Route handler for the root URL
app.get("/", (req, res) => {
  // Sending the index.html file located in the current directory
  res.sendFile(path.resolve(__dirname) + "/index.html");
});

// Route handler for the "/about" URL
app.get("/about", (req, res) => {
  // Sending the about.html file located in the current directory
  res.sendFile(path.resolve(__dirname) + "/about.html");
});

// Route handler for the "/download" URL
app.get("/download", (req, res) => {
  // Sending a file download response for the about.html file located in the current directory
  res.download(path.resolve(__dirname) + "/about.html");
});

// Starting the server to listen on the specified port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
