const productArray = []

for(let i = 0; i < 100; i++){
    const productObject = {
        name : `product number ${i}`,
        image : `https://kyma.vn/StoreData/images/Product/may-anh-canon-eos-250d-kit-ef-s18-55mm-f4-5-6-is-stm(1).webp`,
        description : ` miêu tả vân vân số ${i}`,
        brand  : "canon",
        category : "Electronics",
        price : 930.000,
        countInStock : 10,
        rating : 0,
        numReview : 0,
    }
    productArray.push(productObject)
}

module.exports = productArray