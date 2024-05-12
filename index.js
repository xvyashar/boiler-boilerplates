// Imports
const { Config } = require('./utils');
const App = require('./app');

const app = new App();
const config = new Config();

// Events
app.on('launched', ({ port }) =>
  console.log(`App is running at port: ${port}`),
);
app.on('failed', (error) => console.error('Failed to launch app:\n', error));

app.launch({ port: config.get('PORT') });
