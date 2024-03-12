const Sequelize = require('sequelize');
const dbConfig = require('../config/mysqlConfig');
const logger = require('../middleware/loggerMiddleware');

const { user, database, host, password, port, dialect } = dbConfig;
const { min, max, acquire, idle } = dbConfig.pool;

const sequelize = new Sequelize(
    database,
    user,
    password,
    {
        host,
        port,
        dialect,
        operatorsAliases: 0,
        pool: {
            max,
            min,
            acquire,
            idle,
        },
        logging: false,
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Test connection
sequelize.authenticate().then(() => {
    logger.info('Connection has been established successfully.');
}).catch(err => {
    logger.warn('Unable to connect to the database:', err);
});

module.exports = db;