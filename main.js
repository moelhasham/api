const express = require("express")
require('dotenv').config()
const userspath = require("./routes/users")
const {sendemail} = require("./util/sendemil")
var cors = require('cors')
const path = require('path');
const app = express()
app.use(express.json())
const axios = require('axios');
const {ver} = require("./util/vervy")


app.use(cors())

app.use(ver)
app.get("/" ,  async (req,res) => {
  console.log(req.headers.authorization)
  res.json("hello mohammed hthth")
})
 
app.get("/user" ,  async (req,res) => {
  console.log(req.headers.authorization)
  res.json("hello user")
})
// app.get("/prof" ,cors(corsOptions), async (req,res) => {
//   res.json("https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_1920,c_limit/phonepicutres-TA.jpg")
// })


const port = process.env.PORT || 8002

app.listen(process.env.PORT || 8002, (res,req) => {
    console.log(`app run on`)
})

