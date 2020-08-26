module.exports = app => {
    const farmerResource = require('../resources/farmer')();

    app.route('/farmers').get(farmerResource.search);
}