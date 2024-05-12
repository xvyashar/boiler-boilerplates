// init configs from env
const { config } = require('dotenv');
if (!process.env.HOST) config();

exports.get = (property) => process.env[property];
