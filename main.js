const express = require("express")
require('dotenv').config()
const userspath = require("./routes/users")
const {sendemail} = require("./util/sendemil")
var cors = require('cors')
const path = require('path');
const app = express()
app.use(express.json())
const axios = require('axios');
app.use(cors({
  origin:"http://localhost:5173"
}))



app.get("/" , async (req,res) => {
  res.json("hello mohammed")
})

app.get("/prof" , async (req,res) => {
  res.json("https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_1920,c_limit/phonepicutres-TA.jpg")
})




app.listen(process.env.PORT  || 8002, (res,req) => {
    console.log(`app run on ` + 8002)
})

