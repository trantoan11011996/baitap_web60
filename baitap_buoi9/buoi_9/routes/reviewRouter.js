var express = require('express');
var router = express.Router();
const postReview = require('../controller/reviewController');


// create review
router.post("/",postReview)


module.exports = router