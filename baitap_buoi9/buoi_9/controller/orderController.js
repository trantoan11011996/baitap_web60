const Product = require('../model/productModel')
const User = require ('../model/userModel')
const Orders = require('../model/orderModel')

const asyncHandler = require('express-async-handler')

//get all order

const getAllOrders = asyncHandler(async(req,res)=>{
    const Orders = await Orders.find({})
    res.json(Orders)
})


// get order by user ID ==>gởi token

const getMyOrder = asyncHandler(async(req,res)=>{
    const userId = req.userInfo._id
    const Order = await Orders.find({user : userId})
    res.json(Order)
})

///get order by id order

const getOrder = asyncHandler(async(req,res)=>{
    const order = await Orders.findById(req.params.id)
    res.json(order)
})
// create Order 
// true 
const createOrder = asyncHandler(async(req,res)=>{
    const userId = req.userInfo._id
    const {shippingPrice,paymentResult} = req.body
    paymentResult.update_time = new Date()
    let totalPrice = 0;
    let orderItem = req.body.orderItem
    for(let i = 0;i<orderItem.length;i++){
        let qty = orderItem[i]['qty']
        let item = await Product.findById(orderItem[i]['product'])
        orderItem[i].name = item.name
        orderItem[i].price = item.price
        orderItem[i].image = item.image
        totalPrice += Number(qty) * Number(item.price)
    }

    totalPrice += Number(req.body.shippingPrice)
    const newOrder = await new Orders({
        user : userId,
        totalPrice : totalPrice,
        orderItem,
        shippingPrice,
        paymentResult
    })
    await newOrder.save()
    if(newOrder){
        res.json({
            newOrder
        })
    }
    else{
        res.status(400)
        throw new Error("can not create order")
    }
})

// update order

const updateOrder = asyncHandler(async(req,res)=>{
    const order = await Orders.findById(
        req.params.id,
        {
            $set : {
                "paymentResult.status" : req.body.status
            }
        },
        {new : true}
    )
    if(order){
        res.json({
            message : "succes update",
            id : order._id,
            status : order.paymentResult.status,
        })
    }
    else{
        res.status(400)
        throw new Error('can not update')
    }

})


module.exports = {
    getAllOrders,
    createOrder,
    getMyOrder,
    getOrder
}