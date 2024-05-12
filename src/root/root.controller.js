const { Router } = require('express');
const service = require('./root.service');

// Init Route
const route = Router();

route.get('/', service.helloworld);

module.exports = route;
