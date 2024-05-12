const { Router } = require('express');
const { RootController } = require('../controllers');

// Init
const route = Router();
const controller = new RootController();

route.get('/', controller.helloWorld);

module.exports = route;
