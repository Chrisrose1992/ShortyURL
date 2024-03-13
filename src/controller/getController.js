
exports.mainScreen = (req, res) => {
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

exports.userHomeScreen = (req, res) => {
    const payload = {
        pageTitle: 'Shorty Url | Signup'
    }

    res.render('user/home', payload);
}

exports.urlHomeScreen = (req, res) => {
    const payload = {
        pageTitle: 'Shorty Url | URL'
    }

    res.render('user/url', payload);
}

exports.qrHomeScreen = (req, res) => {
    const payload = {
        pageTitle: 'Shorty Url | QR Code'
    }

    res.render('user/qrcode', payload);
}