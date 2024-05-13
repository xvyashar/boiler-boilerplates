const { RootRouter } = require('./root');

module.exports = { root: new RootRouter().getRouter() };
