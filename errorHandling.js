//function that will handle 404's and give user a response
exports.handle404s = ((req, res, next) => {
  const error = {
    statusCode: 404,
    message: "Resource not found",
    status: "Not Found",
  };

  next(error);
});

//creating the next
exports.errorHandler = ((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    statusCode: error.statusCode,
    status: error.status || "failed",
    message: error.message,
    stack: error.stack,
    ...error,
  });
  next();
});
