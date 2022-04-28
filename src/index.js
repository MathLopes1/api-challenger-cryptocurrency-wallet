const express = require('express');
const routes = require('./app/routes/index');

const app = express();

routes(app);

app.listen(3000, () => console.log('API Criptomoedas - Servidor on'));

module.exports = app;
