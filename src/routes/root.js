const { Router } = require('express');
const { RootController } = require('../controllers');

exports.RootRouter = class RootRouter {
  #router;
  #controller;

  constructor() {
    // Implement singleton
    if (!RootRouter.instance) {
      this.#router = Router();

      this.#controller = new RootController();

      // Implement routes here
      this.#router.get('/', this.#controller.helloWorld);

      RootRouter.instance = this;
    }
    return RootRouter.instance;
  }

  getRouter() {
    return this.#router;
  }
};
