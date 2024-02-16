const express = require("express");

const app = express();

// * 1. basic express req and res
// app.get("/", (req, res) => {
//   res.send("Welcome, this is Home Page");
// });
// app.get("/about", (req, res) => {
//   res.send("Welcome, this is About Page");
// });
// app.get("/help", (req, res) => {
//   res.send("Welcome, this is Help Page");
// });

// * 2. reading route params
// app.get("/", (req, res) => {
//   // http://localhost:8080/?name=faisal
//   console.log(req.query);
//   res.send(`Welcome, ${req.query.name}`);
// });
// app.get("/about", (req, res) => {
//   res.send("Welcome, this is About Page");
// });
// app.get("/help", (req, res) => {
//   res.send("Welcome, this is Help Page");
// });

// app.listen(8080);

// * 3. Render HTML and JSON

app.get("/", (req, res) => {
  res.send("<h1>Welcome, this is Home Page</h1>");
});
app.get("/about", (req, res) => {
  res.send(`
  <input type="text" placeholder="user name" value="${req.query.username}" />
  <button>Click Me!</button>
  `);
});
app.get("/help", (req, res) => {
  res.send([
    { name: "faisal khan", email: "fk@gmail.com" },
    { name: "nasim khan", email: "nsdjsnj@gmail.com" },
  ]);
});

app.listen(8080);
