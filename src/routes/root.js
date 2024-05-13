const { Router } = require('express');
const { root: controller } = require('../controllers');

// Init router
const router = Router();

router.get('/', controller.helloWorld);

module.exports = router;
