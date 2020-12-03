const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
console.log('router1 loaded');
router.get('/', homeController.home);

router.use('/users', require('./user'));
router.use('/posts', require('./post'));
router.use('/profile',require('./app'))
module.exports = router;