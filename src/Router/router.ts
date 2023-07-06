import express from 'express'
import * as data from '../Controller/DataController.js'
import * as UserInfo from '../Controller/UserInfo.js'
import UploadFile from '../ToolClass/UploadFile.js'
const router=express.Router()
/* 
    具有Token才允许访问的接口
*/
router.get("/Pagings",data.Pagings)   //分页数据
router.get("/insertData",data.insertData)  //插入excel数据

router.get("/insert",data.getData)   //批量插入数据
// router.get("/insert",data.getData)   //批量删除数据
router.post("/getUserInfo",UserInfo.getUserInfo)  //获取用户信息
router.get("/UpadateInfo",UserInfo.UpadateInfo) 
router.post("/ChangeImage",UploadFile.upload(process.cwd()+"\\public").single("file"),UserInfo.ChangeImage)
export default router