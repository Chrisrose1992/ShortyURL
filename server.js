require('dotenv').config();

const express = require('express');
const path = require('path');

//Import Files
const logger = require('./src/middleware/loggerMiddleware');
const mysql = require('./src/modules/_mysqlConnection');
const getRoutes = require('./src/routes/getRoutes');
const postRoutes = require('./src/routes/postRoutes');

const { sequelize } = mysql;

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//MYSQL Connection
mysql.sequelize.sync()
    .then(() => {
        logger.info('Successfully connected to MYSQL database and synchronized models');
    })
    .catch((error) => {
        logger.warn('Unable to connect to the MYSQL database or synchronize models:', error);
    });

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

//Static
app.use('/static', express.static(path.join(__dirname, '_public')));

//Routes
app.use('/', getRoutes);
app.use('/api', postRoutes);

// Define global 404 error handler middleware
app.use((req, res) => {
    const payload = {
        pageTitle: 'Tiny Url | 404'
    }

    res.status(404).render('pages/error/404', payload);
});


//Server
const http = require('http');
const server = http.createServer(app);
const port = process.env.SERVER_PORT || 6969;
const host = process.env.SERVER_HOST;
server.listen(port, host, () => {
    logger.info(`Server running on http://${host}:${port}`);
    logger.info('Press CTRL-C to stop\n');
});