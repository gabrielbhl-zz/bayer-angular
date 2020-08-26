const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const cors = require('cors');

module.exports = () => {

    const app = express();

    // set API port
    app.set('port', process.env.PORT || config.get('server.port'));

    // use json parser middleware
    app.use(bodyParser.json());

    // enable all cors requests
    app.use(cors());

    require('../api/routes/farmer')(app);

    return app;
};