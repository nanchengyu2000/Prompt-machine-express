import * as userinfo from '../Serve/UserInfo.js'
import UploadFile from '../ToolClass/UploadFile.js'

async function getUserInfo(req,res){
    const {username}=req.auth
    res.json(await userinfo.getUserInfo(username))
}

async function ChangeImage(req,res){
    const {username}=req.auth
    const uploadedFile = req.file;
    res.send(await userinfo.ChangeImage(uploadedFile.filename,username)?{ status:200,message: '文件保存成功',path:uploadedFile.filename}:{})
}

async function UpadateInfo(req,res){
    const {username}=req.auth
    const newname=req.query.newname

    res.json(await userinfo.UpadateInfo(username,newname))
}

export {getUserInfo,ChangeImage,UpadateInfo}