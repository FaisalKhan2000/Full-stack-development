const errorHandler = (err, req, res, next) => {
  const errorMessage = err.message || "Internal Server Error"; // Default error message
  const statusCode = err.statusCode || 500; // Default status code

  // console.error(errorMessage); // Log the error message

  res
    .status(statusCode)
    .json({ msg: errorMessage, success: false, status: statusCode });
};

export default errorHandler;
