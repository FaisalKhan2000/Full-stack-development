const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Subscribe to the 'request' event using Event Emitter API
const server = http.createServer();
// emits request event
// subcribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  res.end("Welcome");
});

// Specify the port to listen on
const PORT = 8080;

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
