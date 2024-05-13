const { HTTP_STATUS } = require('../constants');

module.exports = {
  helloWorld: (_req, res) => {
    res
      .status(HTTP_STATUS.OK)
      .json({ message: 'Hello World!', statusCode: HTTP_STATUS.OK });
  },
};
