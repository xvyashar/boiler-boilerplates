const { HTTP_STATUS } = require('../constants');

exports.ErrorHandlerMiddleware = class ErrorHandlerMiddleware {
  constructor() {
    // Implement singleton
    if (!ErrorHandlerMiddleware.instance) {
      ErrorHandlerMiddleware.instance = this;
    }
    return ErrorHandlerMiddleware.instance;
  }

  getKnownExceptionsHandler(err, req, res, next) {
    // Fill this function with your conditions
    next(err);
  }

  getUnknownExceptionsHandler(err, _req, res, _next) {
    console.error(err);
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: 'Internal server error.',
      statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR,
    });
  }

  getHandlers() {
    return [this.getKnownExceptionsHandler, this.getUnknownExceptionsHandler];
  }
};
