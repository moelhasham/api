const express = require("express")
require('dotenv').config()
var cors = require('cors')
const {ver} = require("./util/vervy")
const app = express()
const axios = require("axios")
app.use(express.json())


var corsOptions = {
  origin: 'http://localhost:5173'
};
app.use(cors(corsOptions));
app.use(ver)
app.get("/" , async (req,res) => {
  await res.json("server run")
})

app.get("/user" , async (req,res) => {
 await res.json("hi user ")
})

app.post("/pay",  async (req,res) => {
  const {Msisdn,BirthYear,InvoiceNo} = req.body
  const Amount = 1 
  const Category = 11
  const url = "https://pgw.almadar.ly/api/Validate"
  const headers = { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiU2FkYWRQR1ciLCJjb3Jwb3JhdGVTZXJ2aWNlSWQiOjIzOTksImFwcElkIjoiMTQxZTNiMDY4MDQ5NDk0Y2E5Mjc4YjY2ZmUzMGU2OWYiLCJleHAiOjIwMzAyNjczNjUsImlzcyI6IkNvcmV0ZWMiLCJhdWQiOiJTQURBRFBHVyJ9.PSvwNOLznVSVFg5uJofg812gcj9zfAZnkCMw7gCfgqw",
  
  }
  let d = []
  await axios.post(url, {Msisdn,BirthYear,InvoiceNo,Amount,Category} ,{headers})
   .then( data => {
     const a = data.data
     d.push(a)
    
   })
    
   res.json(d)
  

})

// app.post("/confirm", async (req,res) => {

//   const  TransactionId = req.body.TransactionId
//   const  OTP = req.body.OTP
//   // const  amount = req.body.amount
//   // const  invoice_no = req.body.invoice_no
//   const data = await fetch("https://pgw.almadar.ly/api/Pay", {
//     method:'POST',
//     body: JSON.stringify({TransactionId,OTP}),
//     headers:{
//       "Content-Type": "application/json",
//       "SharedKey": "u-srNIFp8Ch2IwDFfh5BT6LoQ4EvwxI5",
//       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiU2FkYWRQR1ciLCJjb3Jwb3JhdGVTZXJ2aWNlSWQiOjIzOTksImFwcElkIjoiMTQxZTNiMDY4MDQ5NDk0Y2E5Mjc4YjY2ZmUzMGU2OWYiLCJleHAiOjIwMzAyNjczNjUsImlzcyI6IkNvcmV0ZWMiLCJhdWQiOiJTQURBRFBHVyJ9.PSvwNOLznVSVFg5uJofg812gcj9zfAZnkCMw7gCfgqw",
//       "Access-Control-Allow-Origin": "*",
//     }
//    })
//    const result = await data.json()
//    res.json(result)
// })

// app.get("/prof" ,cors(corsOptions), async (req,res) => {
//   res.json("https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_1920,c_limit/phonepicutres-TA.jpg")
// })


const port = process.env.PORT || 8002

app.listen(process.env.PORT || 8002, (res,req) => {
    console.log(`app run on`)
})

