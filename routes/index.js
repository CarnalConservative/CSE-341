const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController').default;

router.get('/', homeController.getName);

module.exports = router;