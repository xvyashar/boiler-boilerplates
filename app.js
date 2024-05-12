// Imports
const app = require('express')();
const { urlencoded, json } = require('express');
const { config } = require('./utils');
const { root: rootRoute } = require('./routes');
const {
  errorHandler: { knownExceptions, unknownExceptions },
} = require('./middlewares');

// Base Middlewares
app.use(urlencoded({ extended: false }));
app.use(json());

// Routes
app.use(rootRoute);

// Error Handlers
app.use(knownExceptions);
app.use(unknownExceptions);

// Launch
app.listen(config.get('PORT'), () =>
  console.log(`App is running at port: ${config.get('PORT')}`),
);
