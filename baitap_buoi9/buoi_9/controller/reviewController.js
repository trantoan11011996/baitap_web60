

const Reviews = require('../model/reviewModel')
const Product = require('../model/productModel')
const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');



/// update review
const reviewArr = []
const postReview = asyncHandler(async function (req, res) {
    const review = await (await Reviews.create(req.body)).populate('user')
    reviewArr.push(review)
    try {
        const reviewProduct = review.product
        const productId = reviewProduct._id
        const product = await Product.findById(productId)
        console.log('product',product)
        if (product) {
            product.review.push(review)
            const updateReviewProduct = await product.save()
            const numReview = updateReviewProduct.review.length
            product.numReview = numReview
            const ratingAve = (array) =>{
                let sum = 0
                for(let item of array){
                    sum += item.rating
                }
                return Math.floor(sum/array.length)
            }
            product.rating = ratingAve(reviewArr)
            const updateProduct = await product.save()
            res.json(updateProduct)
        } else {
            res.status(400)
            throw new Error('Error')
        }
    }catch(err){
        res.status(400)
        throw new Error(err)
    }
})

const getReview = asyncHandler(async(req,res)=>{
    const review = await Reviews.findById(req.params.id)
    if(review){
        const user = await User.findById(review.user)
        res.json({
            review,
            user
        })
    }
    else{
        res.status(400)
        throw new Error('review not found')
    }
})


module.exports = {
    postReview,
    getReview
}

