// Import required modules
const http = require("http");
const fs = require("fs").promises;
const path = require("path");

// Create a server using the http module
const app = http.createServer(async (req, res) => {
  // Determine the file path based on the request URL
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // Set default content type to HTML
  let contentType = "text/html";

  // Get the file extension
  let ext = path.extname(filePath);

  // If no file extension is provided, assume HTML and append .html extension
  if (!ext) {
    filePath += ".html";
    contentType = "text/html";
  } else {
    // Determine content type based on file extension
    switch (ext) {
      case ".css":
        contentType = "text/css";
        break;
      case ".js":
        contentType = "text/javascript";
        break;
      default:
        contentType = "text/html";
        break;
    }
  }

  try {
    // Read the file content asynchronously
    const content = await fs.readFile(filePath);

    // Set response headers
    res.writeHead(200, {
      "Content-Type": contentType,
    });

    // Send the file content as the response
    res.end(content);
  } catch (err) {
    // If an error occurs while reading the file
    let errorFilePath = path.join(__dirname, "public", "error.html");
    try {
      // Attempt to read the error file
      const data = await fs.readFile(errorFilePath);

      // Set response status to 404 (Not Found)
      res.writeHead(404, {
        "Content-Type": contentType,
      });

      // Send the error file content as the response
      res.end(data);
    } catch (err) {
      // If an error occurs while reading the error file
      // Set response status to 500 (Internal Server Error)
      res.writeHead(500);
      // Send a generic error message as the response
      res.end("Error!!!");
    }
  }
});

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// const http = require("http");

// const server = http.createServer((req, res) => {
//   //   if (req.url === '/') {
//   //     res.end('Welcome to our home page')
//   //   }
//   //   if (req.url === '/about') {
//   //     res.end('Here is our short history')
//   //   }
//   //   res.end(`
//   //   <h1>Oops!</h1>
//   // <p>We can't seem to find the page you are looking for</p>
//   // <a href="/">back home</a>
//   //   `)
//   // ###################################
//   // ###################################
//   //
//   //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
//   // SWITCH TO IF, ELSE IF, ELSE (BELOW)
//   // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
//   if (req.url === "/") {
//     res.end("Welcome to our home page");
//   } else if (req.url === "/about") {
//     res.end("Here is our short history");
//   } else {
//     res.end(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `);
//   }
// });

// server.listen(3000);
