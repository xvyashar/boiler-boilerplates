const { HTTP_STATUS } = require('../constants');

exports.RootController = class RootController {
  constructor() {}

  helloWorld(_req, res) {
    res
      .status(HTTP_STATUS.OK)
      .json({ message: 'Hello World!', statusCode: HTTP_STATUS.OK });
  }
};
