const { HTTP_STATUS } = require('../constants');

exports.RootService = class RootService {
  constructor() {
    // Implement Singleton
    if (!RootService.instance) {
      RootService.instance = this;
    }
    return RootService.instance;
  }

  helloWorld(_req, res) {
    res
      .status(HTTP_STATUS.OK)
      .json({ message: 'Hello World!', statusCode: HTTP_STATUS.OK });
  }
};
