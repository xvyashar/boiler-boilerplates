const { Router } = require('express');
const { RootService } = require('./root.service');

exports.RootController = class RootController {
  #router;
  #service;

  constructor() {
    // Implement singleton
    if (!RootController.instance) {
      this.#router = Router();
      this.#service = new RootService();

      // Implement routes here
      this.#router.get('/', this.#service.helloWorld);

      RootController.instance = this;
    }

    return RootController.instance;
  }

  getRouter() {
    return this.#router;
  }
};
