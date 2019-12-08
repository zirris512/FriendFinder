const path = require('path');

module.exports = function(app) {

    app.get('/', (_req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get('/survey', (_req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};