// Imports
const app = require('express')();
const { urlencoded, json } = require('express');
const { getEnv } = require('./utils');
const routes = require('./routes');
const { errorHandlers } = require('./middlewares');

// Base middlewares
app.use(urlencoded({ extended: false }));
app.use(json());

// Routes
for (const route of Object.keys(routes)) {
  app.use(routes[route]);
}

// Error handlers
app.use(errorHandlers);

// Launch
app.listen(getEnv('PORT'), () =>
  console.log(`App is running at port: ${getEnv('PORT')}`),
);
