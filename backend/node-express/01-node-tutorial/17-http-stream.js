var http = require("http"); // Require the 'http' module to create an HTTP server
var fs = require("fs"); // Require the 'fs' module to work with the file system

http
  .createServer(function (req, res) {
    // Create an HTTP server with a callback function to handle requests

    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)

    const fileStream = fs.createReadStream("./content/big.txt", "utf8"); // Create a Readable stream to read the file asynchronously

    fileStream.on("open", () => {
      // Event handler for the 'open' event, emitted when the file is opened for reading
      fileStream.pipe(res); // Pipe the contents of the file to the HTTP response stream
    });

    fileStream.on("error", (err) => {
      // Event handler for the 'error' event, emitted if an error occurs while reading the file
      res.end(err); // Send the error message as the response
    });
  })
  .listen(5000); // Start the server and make it listen on port 5000
