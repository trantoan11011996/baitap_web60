var express = require('express');
const { getAllOrders, createOrder, getMyOrder, getOrder } = require('../controller/orderController');
const { protect, checkAdmin } = require('../middleware/authTokenMiddleware');
var router = express.Router();

/// get all order
router.get('/',protect,checkAdmin,getAllOrders)


// get order by id

router.get("/:id",getOrder)

// get my order 
router.get("/myOrders",protect,getMyOrder)


//create new order 

router.post('/',protect,createOrder)

//update Order to paid ( từ chưa thanh sang đã thanh toán)
router.put('/:id/pay')


module.exports = router