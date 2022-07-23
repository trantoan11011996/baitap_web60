var express = require('express');
var indexRoute = express.Router();

/* GET home page. */
indexRoute.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = indexRoute;
