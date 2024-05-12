const { config } = require('dotenv');

exports.Config = class Config {
  constructor(path) {
    // implement singleton
    if (!Config.instance) {
      config({ path });

      Config.instance = this;
    }

    return Config.instance;
  }

  get(property) {
    return process.env[property];
  }
};
