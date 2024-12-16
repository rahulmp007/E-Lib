const AppError = require("../utils/appError");

const appErrorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message;
  let errors = [];

  console.log(`error handler :=> ${err}`);

  if (err.name == "ValidationError") {
    message = "mongoose model validation failed";
    statusCode = 400;
    errors = Object.values(err.errors).map((e) => {
      ({
        field: e.path,
        message: e.message,
      });
    });
  }

  if (err.name == "MongoServerError") {
    message = `${Object.values(err)[0].errmsg}`;
    statusCode = 400;
  }

  if (err instanceof AppError) {
    message = err.message;
    statusCode = err.statusCode;
  }

  res.status(statusCode || 500).json({
    status: false,
    message: message,
    ...(errors.length && { errors }),
  });
};

module.exports = appErrorHandler;
