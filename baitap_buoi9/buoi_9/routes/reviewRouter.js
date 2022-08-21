var express = require('express');
var router = express.Router();
const {postReview,getReview} = require('../controller/reviewController');


// create review
router.post("/",postReview)

///

router.get("/:id",getReview)
module.exports = router