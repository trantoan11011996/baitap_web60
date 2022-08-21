const mongoose = require('mongoose')

const connectDB = async() =>{
    // thuc hien connect den database

    try{
        // const dbconfig = 'mongodb://localhost/fullstack-ecom'
        const dbconfig = 'mongodb+srv://toan1996:toan1996@cluster-mindx.ycqk8p2.mongodb.net/fullstack-ecom?retryWrites=true&w=majority'
        const connect = await mongoose.connect(dbconfig)
        console.log(`connect : ${connect.connection.host}`)

    }catch(e){
        console.log('err to connect')
    }
}

module.exports = connectDB