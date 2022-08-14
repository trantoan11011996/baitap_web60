
const Product = require('../model/productModel')
const User = require('../model/userModel')
const asyncHandler = require('express-async-handler');

// get all product
const getProduct = asyncHandler(async function (req, res) {
    // fix số lượng hiển thị trên 1 trang

    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1
    const keyword = req.query.keyword ? { name: { $regex: req.query.keyword } } : {}
    const countProduct = await Product.countDocuments({ ...keyword })
    const productNotSkip = await Product.find({ ...keyword })
    console.log('product not skip', productNotSkip)
    const products = await Product.find({ ...keyword }).limit(pageSize).skip(pageSize * (page - 1))
    res.json({
        products,
        countProduct,
        page
    })

})

// get product by id
const getProductID = asyncHandler(async function (req, res) {
    console.log(mongoose.Types.ObjectId.isValid(req.params.id))
    try {
        const product = await Product.findById(req.params.id).populate('review')
        if (product) {
            res.json(product)
        } else {
            res.status(400)
            res.json({
                message: "product can not found"
            })
        }
    } catch (err) {
        res.status(400)
        throw new Error(err)
    }
})

// delete product by Id
const deleteProductById = asyncHandler(async function (req, res) {
    const product = await Product.findById(req.params.id)
    if (product) {
        await product.remove()
        res.json({
            message: 'xóa thành công'
        })
    }
    else {
        res.status(400)
        throw new Error('product not exist in DB or already deleted')
    }
})

//create product
const createProduct = asyncHandler(async function (req, res) {
    const user = await User.findOne(req.userInfo._id)
    if (user) {
        const newProduct = await Product.create(req.body)
        const productInfo = await newProduct.populate('user')
        res.json(productInfo)
    }
    else {
        res.status(400)
        throw new Error('error')
    }
})


// update product
const updateProductByid = asyncHandler(async function (req, res) {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (product) {
        product.brand = req.body.brand || product.brand;
        product.category = req.body.category || product.category;
        product.description = req.body.description || product.description;
        const updateProduct = await product.save();
        res.json({
            message: `Successfully updated ${updateProduct.name}`,
        });
    } else {
        res.status(404);
        throw new Error("Product doesn't exist!");
    }
})




module.exports = {
    createProduct,
    getProduct,
    getProductID,
    deleteProductById,
    updateProductByid,
}

