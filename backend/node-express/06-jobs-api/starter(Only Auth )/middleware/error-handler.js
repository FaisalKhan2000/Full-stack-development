const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  const errorMessage = err.message || "Internal Server Error"; // Default error message
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR; // Default status code

  console.error(errorMessage); // Log the error message

  return res.status(statusCode).json({ msg: errorMessage });
};

module.exports = errorHandlerMiddleware;
