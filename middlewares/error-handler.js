const { HTTP_STATUS } = require('../constants');

exports.knownExceptions = (err, req, res, next) => {
  // fill this function with your conditions
  next(err);
};

exports.unknownExceptions = (err, _req, res, _next) => {
  console.error(err);
  res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    message: 'Internal server error.',
    statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR,
  });
};
