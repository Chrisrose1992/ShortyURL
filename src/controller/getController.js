
exports.mainHomeScreen = (req, res) => {
    const payload = {
        pageTitle: 'Shorty Url | Home'
    }

    res.render('home', payload);
}

exports.loginScreen = (req, res) => {
    const payload = {
        pageTitle: 'Shorty Url | Login'
    }

    res.render('auth/login', payload);
}

exports.signupScreen = (req, res) => {
    const payload = {
        pageTitle: 'Shorty Url | Signup'
    }

    res.render('auth/signup', payload);
}