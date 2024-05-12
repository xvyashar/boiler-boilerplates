const { Router } = require('express');
const { root: controller } = require('../controllers');

// Init Route
const route = Router();

route.get('/', controller.helloworld);

module.exports = route;
