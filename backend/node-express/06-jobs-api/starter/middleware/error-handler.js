// const { StatusCodes } = require("http-status-codes");

// const errorHandlerMiddleware = (err, req, res, next) => {
//   const errorMessage = err.message || "Internal Server Error"; // Default error message
//   const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR; // Default status code

//   console.error(errorMessage); // Log the error message

//   return res.status(statusCode).json({ msg: errorMessage });
// };

// module.exports = errorHandlerMiddleware;

const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    // set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong try again later",
  };

  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message })
  // }

  // validation error if a field is empty
  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
    customError.statusCode = 400;
  }

  // handling duplicate error
  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customError.statusCode = 400;
  }

  // cast error - syntax not match (for e.g. 65e9a935df2e6deba1cebbf7 amd we wrote 65e9a935df2e6deba1cebbf)
  if (err.name === "CastError") {
    customError.msg = `No item found with id : ${err.value}`;
    customError.statusCode = 404;
  }

  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
