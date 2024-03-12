const crypto = require('crypto');
const logger = require('../middleware/loggerMiddleware');

function generateSecret(length = 64) {
    try {
        if(isNaN(length) || length < 8) {
            logger.log('error', 'Length must be a number not less than 8');
            return null;
        }

        return crypto.randomBytes(length).toString('hex');
    } catch(error) {
        logger.log('error', `Error while generating secret: ${error.message}`);
        return null;
    }
}

const sessionSecret = generateSecret(); // 64 bytes for session secret
const jwtSecret = generateSecret(); // 64 bytes for JWT secret
const cookieSecret = generateSecret();


console.log('JWT Secret:', jwtSecret);
console.log('Session Secret:', sessionSecret);
console.log('Cookie Secret:', cookieSecret);

module.exports = {
    sessionSecret,
    jwtSecret,
    cookieSecret,
}