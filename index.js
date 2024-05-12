// Imports
const app = require('express')();
const { urlencoded, json } = require('express');
const { config } = require('./utils');
const routes = require('./routes');
const {
  errorHandler: { knownExceptions, unknownExceptions },
} = require('./middlewares');

// Base Middlewares
app.use(urlencoded({ extended: false }));
app.use(json());

// Routes
for (const route of Object.keys(routes)) {
  app.use(routes[route]);
}

// Error Handlers
app.use(knownExceptions, unknownExceptions);

// Launch
app.listen(config.get('PORT'), () =>
  console.log(`App is running at port: ${config.get('PORT')}`),
);
