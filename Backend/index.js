const express = require('express')
const path = require("path"); 
require('dotenv').config()
const cors = require('cors')
const dbConnection = require('./config/connection')
const userRoute = require('./routes/userRoute')
const app = express()
const Port = process.env.PORT



dbConnection()

// middlewares
app.use(express.json())
app.use(cors())

// routes
app.use('/api/v1/user',userRoute)



app.get("/", (req, res) => { 
      res.send({message:'hello world'}) 
  }); 


app.listen(Port,()=>{
    console.log(`server is running on ${Port}`)
})
