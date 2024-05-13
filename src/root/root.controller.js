const { Router } = require('express');
const service = require('./root.service');

// Init route
const router = Router();

router.get('/', service.helloWorld);

exports.router = router;
