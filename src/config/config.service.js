// Init configs from env
const { config } = require('dotenv');
config();

exports.getEnv = (property) => process.env[property];
