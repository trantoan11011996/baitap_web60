var express = require('express');
var contactRoute = express.Router();

contactRoute.get('/', function(req, res, next) {
  res.render('contact');
});

module.exports = contactRoute;
