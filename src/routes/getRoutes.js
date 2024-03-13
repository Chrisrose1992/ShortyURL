const router = require('express').Router();

const {
    mainHomeScreen,
    loginScreen,
    signupScreen,
} = require('../controller/getController');


router.get('/', mainHomeScreen);
router.get('/login', loginScreen);
router.get('/signup', signupScreen);

module.exports = router;