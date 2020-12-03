const express = require('express');
const router = express.Router();
const passport=require('passport')
const userController = require('../controllers/users_controller');
console.log('uesr router loaded');

router.get('/profile',passport.checkAuthentication, userController.profile);
router.get('/Sign-up', userController.SignUp);
router.get('/Sign-in', userController.SignIn);
router.post('/create', userController.create);

//use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local', { failureRedirect: '/users/sign-in' }
), userController.createSession);

router.get('/sign-out', userController.destroySession);

module.exports = router;