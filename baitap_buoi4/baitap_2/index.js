const express = require('express')
const app = express()

const port = 5000
const userRouter = require("./router/userRouter")

app.use(express.json())
app.use("/api/user",userRouter)

app.listen(port)