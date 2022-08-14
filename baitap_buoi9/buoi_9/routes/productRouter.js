var express = require('express');
var router = express.Router();
const { createProduct,
    getProduct,
    getProductID,
    deleteProductById,
    updateProductByid, 
    deleteAll} = require('../controller/productController');
const { protect, checkAdmin } = require('../middleware/authTokenMiddleware');

// get all
router.get('/', getProduct)

// get by id 
router.get("/:id", getProductID)

//delete by id
router.delete("/:id", protect, checkAdmin, deleteProductById)

/// create product
router.post("/", protect, checkAdmin, createProduct)

// update product
router.post("/:id",protect, checkAdmin, updateProductByid)





module.exports = router