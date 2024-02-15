const http = require("http");
const users = require("./data");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(users));
    res.end();
  })
  .listen(8080);
