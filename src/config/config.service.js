const { config } = require('dotenv');

exports.ConfigService = class ConfigService {
  constructor(path) {
    // Implement singleton
    if (!ConfigService.instance) {
      config({ path });

      ConfigService.instance = this;
    }

    return ConfigService.instance;
  }

  get(property) {
    return process.env[property];
  }
};
