// Imports
const EventEmitter = require('events').EventEmitter;
const express = require('express');
const { urlencoded, json } = express;
const routes = require('./routes');
const { ErrorHandlerMiddleware } = require('./middlewares');

module.exports = class App extends EventEmitter {
  #app;
  constructor() {
    // implement singleton
    if (!App.instance) {
      super();

      this.#app = express();

      // Base Middlewares
      this.#app.use(urlencoded({ extended: false }));
      this.#app.use(json());

      // Routes
      for (const route of Object.keys(routes)) {
        this.#app.use(routes[route]);
      }

      // Error Handlers
      const errorHandler = new ErrorHandlerMiddleware();
      this.#app.use(errorHandler.getHandlers());

      App.instance = this;
    }

    return App.instance;
  }

  launch({ port } = { port: 3000 }) {
    try {
      this.#app.listen(port, () => this.emit('launched', { port }));
    } catch (error) {
      this.emit('failed', error);
    }
  }
};
