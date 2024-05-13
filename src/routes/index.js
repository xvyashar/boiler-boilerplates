const { RootController } = require('../root');

module.exports = { root: new RootController().getRouter() };
