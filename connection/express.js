const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: false,
    parameterLimit: 1000000,
  }),
);

// parse application/json
app.use(bodyParser.json({ limit: '50mb' }));

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST',
  );

  // Pass to next layer of middleware
  next();
});

// All index route will be handled here
app.use('/', require('../routes/index'));

module.exports = app;