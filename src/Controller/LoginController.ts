import * as Login from '../Serve/Login.js'

async function userLogin(req,res){
  const {username,password}=req.body
  res.json(await Login.userLogin(username,password))
}
async function userSign(req,res){
  const {username,password}=req.body
  res.json(await Login.userSign(username,password))
}
export {userLogin,userSign}