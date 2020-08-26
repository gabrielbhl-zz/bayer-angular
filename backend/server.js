const app = require('./config/express')();
const port = app.get('port');

// start server
app.listen(port, () => {
    console.log(`Farmer API is running on port ${port}`);
});

module.exports = app;
