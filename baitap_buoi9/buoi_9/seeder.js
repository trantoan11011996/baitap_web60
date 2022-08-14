
const product = require('./model/productModel')
const connectDB = require('./config/db')
const products =  require('./data/productData')
const  User  = require('./model/userModel')
connectDB()

const importData = async ()=>{
 ///xử lí logic import dữ liệu vào database
 try{
    const userAdmin = await User.findOne({email: "ben@gmail.com"})
    const sampleProduct = products.map((product)=>{
        return{...product,user : userAdmin._id}
     }) 
     await product.insertMany(sampleProduct)
     console.log('succes')
 }catch(err){
    console.log('import failed',err)
 }
}

importData()