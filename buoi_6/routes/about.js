var express = require('express');
var aboutRoute = express.Router();

aboutRoute.get('/', function(req, res, next) {
  res.render('about');
});

module.exports = aboutRoute;
