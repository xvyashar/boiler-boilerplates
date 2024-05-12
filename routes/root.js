const { Router } = require('express');
const { root } = require('../controllers');

// Init Route
const route = Router();

route.get('/', root.helloworld);

module.exports = route;
