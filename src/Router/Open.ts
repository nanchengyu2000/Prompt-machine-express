import express from 'express'
import * as Login from '../Controller/LoginController.js'
import * as data from '../Controller/DataController.js'
const router=express.Router()
/* 
    公开的接口
*/
router.post("/userLogin",Login.userLogin)   //用户登录接口
router.post("/userSign",Login.userSign)     //用户注册
router.get("/getAlltype",data.getAlltype)  //获取类型接口
router.get("/getData",data.getData)   //获取分类数据接口
router.get("/getAll",data.getAll)
export default router