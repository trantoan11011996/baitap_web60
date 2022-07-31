var express = require('express');
var router = express.Router();
const { users, products } = require('../model/model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validateLogin, validateRegister, validateProduct } = require('../validate/validate')
const authMiddleware = require('../middleware/authmiddleware')



router.post('/user/register', async function (req, res) {
  const { body } = req
  const { error } = validateRegister(body)

  if (error) return res.status(400).send(error.details[0].message)

  const emailExist = await users.findOne({ email: body.email })
  if (emailExist) {
    return res.status(400).send('email exist in database')
  }

  const salt = await bcrypt.genSalt(10)
  const hasspass = await bcrypt.hash(body.password, salt)

  const newUser = new users()
  newUser.name = body.name
  newUser.age = body.age
  newUser.address = body.address
  newUser.gender = body.gender
  newUser.phone = body.phone
  newUser.email = body.email
  newUser.password = hasspass

  try {
    const user = await newUser.save()
    res.send(user)
  } catch (error) {
    res.send('ERROR')
  }
})

////login vào hệ thống bằng email , password

router.post("/user/login", async function (req, res) {
  const { body } = req
  const { error } = validateLogin(body)

  if (error) return res.status(400).send('email hoặc password sai định dạng')

  // kiểm tra email
  const checkEmail = await users.findOne({ email: body.email })
  if (!checkEmail) return res.status(400).send('sai thông tin email')

  // kiểm tra pass
  const checkPass = await bcrypt.compare(body.password, checkEmail.password)
  if (!checkPass) return res.status(400).send('sai password')

  const token = jwt.sign({ _id: checkEmail._id }, 'khongduoctietlo')
  res.header('auth-token', token).send(token)
})

//// create product
router.post('/product/create_product',authMiddleware, async function (req, res) {
  const { body } = req
  const { error } = validateProduct(body)

  if (error) return res.status(400).send('sai thông tin sản phẩm')
  const checkProduct = await products.findOne({ name: body.name })
  if (checkProduct) return  res.status(400).send('sản phẩm đã tồn tại trong hệ thống')

  const newProduct = new products()

  newProduct.name = body.name;
  newProduct.price = body.price;
  newProduct.amount = body.amount;

  try {
    const product = await newProduct.save()
    res.send(product)
  } catch (err) {
    res.send("ERROR")
  }

})

//// get all product
router.get("/product/get_product", async function (req, res) {
  products.find({}).exec((err, data) => {
    if (err) {
      res.status(400).send('không lấy được dữ liệu')
      return
    }
    else {
      res.json(data)
    }
  })
})

///update by id
router.put("/product/id/:id",authMiddleware,async function(req,res){
    const query = req.body.query
    products.findByIdAndUpdate({
      _id : req.params.id
    },
    query,
    {
      new : true
    },
    function(err,data){
      if(err){
        res.status(400).send("không thể cập nhật dữ liệu")
        return
      }
      else{
        res.send(data)
      }
    })
})
//delete by id
router.delete("/product/id/:id",authMiddleware,async function(req,res){
  products.findByIdAndDelete({
    _id : req.params.id
  },
  function(err,data){
    if(err){
      res.status(400).send("không thể cập nhật dữ liệu")
      return
    }
    else{
      res.send(data)
    }
  })
})
module.exports = router