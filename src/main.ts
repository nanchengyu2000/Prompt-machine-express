import express from "express";
import router from './Router/router.js'
import Open from './Router/Open.js'
import {expressjwt} from 'express-jwt'
import cors from "cors"
import { config } from 'dotenv';
config()
const app=express()
app.use(cors())
app.use("/public",express.static("public"))
app.use(express.urlencoded({ extended: false })).use(express.json())
app.use(expressjwt({
  secret:"ASKGDASGDAS%GFDG&GFh*YWD@@@KK",
  algorithms: ['HS256']
}).unless({path:[/^\/API\//,/^\/public\//]})
)

app.use((err,req,res,next)=>{
  if (err.name==='UnauthorizedError') {
    res.send({status:401,Message:"无效的Token"})
  }
  res.send(err.message) 
})
app.use("/API",Open)
app.use("/System",router)


app.listen(8082,()=>{
  console.log("Express serve Running at 127.0.0.1:8082");
})