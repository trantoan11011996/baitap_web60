var express = require('express');
var router = express.Router();

/// get all order
router.get('/')

// get my order 

router.get("/myorders")

//get order by id

router.get("/:id")


//create new order 

router.post('/')

//update Order to paid ( từ chưa thanh sang đã thanh toán)

router.put('/:id/pay')

module.exports = router