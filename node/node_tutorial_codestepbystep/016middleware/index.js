// * In Express.js, middleware functions are a fundamental concept that allows you to perform various tasks during the request-response cycle. Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. These functions can:

// Execute code: Middleware can execute any code, perform data manipulation, validation, logging, or any other operation you require during the request-response cycle.

// Modify request and response objects: Middleware can modify the request and response objects. For example, parsing request bodies, adding custom headers to responses, or modifying request parameters.

// Execute asynchronously: Middleware functions can perform asynchronous operations, such as interacting with databases or making HTTP requests, before passing control to the next middleware.

// Control flow: Middleware functions have the ability to control the flow of the request-response cycle. They can decide whether to pass the request to the next middleware or terminate the cycle early by sending a response.

// Error handling: Middleware can handle errors that occur during the request-response cycle. You can define error-handling middleware to catch errors and send appropriate responses to the client.

// Middleware functions are added to the Express application using the app.use() method or specific HTTP method functions like app.get(), app.post(), etc. Middleware can be added globally to all routes or selectively to specific routes.

// * 1. applying middle on all routes

// const express = require("express");
// const app = express();

// const requestFilter = (req, res, next) => {
//   if (!req.query.age) {
//     res.send("Please provide age");
//   } else if (req.query.age < 18) {
//     res.send("Youn cannot access this page");
//   } else next()
// };

// app.use(requestFilter);

// app.get("/", (req, res) => {
//   res.send("Welcome to home page");
// });
// app.get("/users", (req, res) => {
//   res.send("Welcome to users page");
// });

// app.listen(8080);

// * 2. applying middleware on specific routes
// const express = require("express");
// const requestFilter = require("./middleware");
// const app = express();

// // const requestFilter = (req, res, next) => {
// //   if (!req.query.age) {
// //     res.send("Please provide age");
// //   } else if (req.query.age < 18) {
// //     res.send("Youn cannot access this page");
// //   } else next();
// // };

// // app.use(requestFilter);

// app.get("/", (req, res) => {
//   res.send("Welcome to home page");
// });

// // applying middle ware on a single route
// app.get("/users", requestFilter, (req, res) => {
//   res.send("Welcome to users page");
// });
// app.get("/about", (req, res) => {
//   res.send("Welcome to about page");
// });

// app.listen(8080);

// * 2. applying middleware on specific routes using Router
const express = require("express");
const requestFilter = require("./middleware");
const app = express();
const route = express.Router();

route.use(requestFilter);

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

// applying middleware using router()
route.get("/users", (req, res) => {
  res.send("Welcome to users page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to about page");
});

app.use("/", route);

app.listen(8080);
