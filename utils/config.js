// init configs from env
const { config } = require('dotenv');
config();

exports.get = (property) => process.env[property];
