const express = require("express")
require('dotenv').config()
var cors = require('cors')
const app = express()
app.use(express.json())


app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  res.setHeader('Access-Control-Allow-Credentials', true);

  
  next();
});

app.use(cors({
  origin: "*",
  
}));

app.get("/" , async (req,res) => {
  res.json("server run")
})

app.post("/pay",cors(origin),  async (req,res) => {
  
  const Msisdn = req.body.Msisdn 
  const BirthYear = req.body.BirthYear 
  const InvoiceNo =  req.body.InvoiceNo
  const Amount = req.body.Amount 
  const Category = req.body.Category

  const resp = await fetch("https://pgw.almadar.ly/api/Validate", {
    method:'POST',
    body: JSON.stringify({Msisdn,BirthYear,InvoiceNo,Amount,Category}),
    headers:{
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiU2FkYWRQR1ciLCJjb3Jwb3JhdGVTZXJ2aWNlSWQiOjIzOTksImFwcElkIjoiMTQxZTNiMDY4MDQ5NDk0Y2E5Mjc4YjY2ZmUzMGU2OWYiLCJleHAiOjIwMzAyNjczNjUsImlzcyI6IkNvcmV0ZWMiLCJhdWQiOiJTQURBRFBHVyJ9.PSvwNOLznVSVFg5uJofg812gcj9zfAZnkCMw7gCfgqw",
     
    }
   })
   
    const da = await resp.json()
  
    res.json(da)

   
  

})

app.post("/confirm", async (req,res) => {

  const  TransactionId = req.body.TransactionId
  const  OTP = req.body.OTP
  const data = await fetch("https://pgw.almadar.ly/api/Pay", {
    method:'POST',
    body: JSON.stringify({TransactionId,OTP}),
    headers:{
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiU2FkYWRQR1ciLCJjb3Jwb3JhdGVTZXJ2aWNlSWQiOjIzOTksImFwcElkIjoiMTQxZTNiMDY4MDQ5NDk0Y2E5Mjc4YjY2ZmUzMGU2OWYiLCJleHAiOjIwMzAyNjczNjUsImlzcyI6IkNvcmV0ZWMiLCJhdWQiOiJTQURBRFBHVyJ9.PSvwNOLznVSVFg5uJofg812gcj9zfAZnkCMw7gCfgqw",
       
    }
   })
   const result = await data.json()
   res.json(result)
})

// app.get("/prof" ,cors(corsOptions), async (req,res) => {
//   res.json("https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_1920,c_limit/phonepicutres-TA.jpg")
// })


const port = process.env.PORT || 8002

app.listen(process.env.PORT || 8002, (res,req) => {
    console.log(`app run on`)
})

