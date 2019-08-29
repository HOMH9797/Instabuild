const express = require('express');
const app = express();

app.use(require('./construccion'));

module.exports = app;