class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.errors = [];
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
