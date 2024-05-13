const { HTTP_STATUS } = require('../constants');

exports.RootController = class RootController {
  constructor() {
    // Implement singleton
    if (!RootController.instance) {
      RootController.instance = this;
    }
    return RootController.instance;
  }

  helloWorld(_req, res) {
    res
      .status(HTTP_STATUS.OK)
      .json({ message: 'Hello World!', statusCode: HTTP_STATUS.OK });
  }
};
