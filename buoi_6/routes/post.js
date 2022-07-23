var express = require('express');
var postRoute = express.Router();

postRoute.get('/', function(req, res, next) {
  res.render('post');
});

module.exports = postRoute;
