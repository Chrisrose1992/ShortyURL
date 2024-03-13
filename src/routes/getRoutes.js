const router = require('express').Router();

const {
    mainScreen,
    loginScreen,
    signupScreen,
    userHomeScreen,
    urlHomeScreen,
    qrHomeScreen,
} = require('../controller/getController');


router.get('/', mainScreen);
router.get('/login', loginScreen);
router.get('/signup', signupScreen);

//Use Screens
router.get('/dashboard', userHomeScreen);
router.get('/url', urlHomeScreen);
router.get('/QR-Code', qrHomeScreen);

module.exports = router;