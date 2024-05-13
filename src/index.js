// Imports
const { ConfigService } = require('./config');
const { App } = require('./app');

const app = new App();
const config = new ConfigService();

// Events
app.on('launched', ({ port }) =>
  console.log(`App is running at port: ${port}`),
);
app.on('failed', (error) => console.error('Failed to launch app:\n', error));

app.launch({ port: config.get('PORT') });
