const express = require("express")
require('dotenv').config()
var cors = require('cors')

const app = express()
app.use(express.json())




app.use(cors({ origin: true }));

app.get("/" , async (req,res) => {
  await res.json("server run")
})

app.get("/user" , async (req,res) => {
 await res.json("hi user ")
})

app.post("/pay",  async (req,res) => {
  
  const mobile_number = req.body.mobile_number
  const birth_year = req.body.birth_year 
  const amount =  req.body.amount
  // const Amount = req.body.Amount 
  // const Category = req.body.Category

  const resp = await fetch("https://api.plutus.ly/api/v1/transaction/sadadapi/verify", {
    method:'POST',
    body: JSON.stringify({mobile_number,birth_year,amount}),
    headers:{
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOWFiMmNhYTc1OGVlZDU3Yjk1ODdjYTQ1ODY0YWM2MjA3NWIxMGEwYTM2MmRiMjk5MWFkZmVkNmMzY2Y4MDQwMGRhYjc0NTIyZDM2NjlhZmYiLCJpYXQiOjE3MTY4OTQwMTQuMDkzNzg3LCJuYmYiOjE3MTY4OTQwMTQuMDkzNzg5LCJleHAiOjIwMzI0MjY4MTQuMDg3OTQyLCJzdWIiOiI4NzAiLCJzY29wZXMiOltdfQ.jHPz4d9IljEDauFK1lRRnQt0npm_dRCMPWaK_1eayFTn6Q-jKBz9KFnN5W0OjedMghm38J-6f_-PmNY1xW85n2pAW_pOUymqwNnr-4n7MHN5n2N_YBtl_tamuNdXHzIZdBjwEQUElVC_ZHj24hwIJYTJHcuaMB7HrCJY6bNms-erxH8AdcvY7UqEIltftm_RdBTWGkbA9fidwMKCOYM-17Za9-QNolPq7Y6j17YnOCxRwF7F2-5g4YrjSDzhXyJ_nPuKaxTDOcVMvxzpihzVl-AGhlw6Sx3hWdhMPFnX1KQPxtmsCXnFbAJN_AU5PZGaivsEuVZQTKEFBcT3BsqFhDWUqyBUAb9oLALdtFguu3NFnnzOx75QBnDg2HnH_NFNY29VnI_WfPWLwTXU3wqfUQFSTwt9ozpZq_298FPzPCm-gRrPc_AfSPmj4Z2R4Ppgqo9cLwDOI3bGKnQgOekZYbVaF4YV7Tbs6msCIZtp-rpic3JO55qIms2p4GX9YPDPMeqLiZ8IvnL3zb_i4X-uFWjPoW9kn0RImVdeaJZN3voeRUg3kV8w7FNlz-55kXNgaBffMtgTeFfMCSw6vfT482ioux5pNZUPrf9JDS4uw9E61h7ohLspHw5bNmGH1wWHTAfS0yys-Q8x3L9OU2A5O_iM4y-LApX5v3vcSQe1HOc",
      "X-API-KEY": "984adf4c-44e1-418f-829b"
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

