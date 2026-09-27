const express = require('express');
const router = express.Router();
const contactsRoutes = require('./contacts');
const homeController = require('../controllers/homeController');

router.get('/', homeController.getName);
router.use('/contacts', contactsRoutes);

module.exports = router;