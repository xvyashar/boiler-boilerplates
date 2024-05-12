const { HTTP_STATUS } = require('../constants');

exports.helloworld = (_req, res, next) => {
  res
    .status(HTTP_STATUS.OK)
    .json({ message: 'Hello World!', statusCode: HTTP_STATUS.OK });
};
