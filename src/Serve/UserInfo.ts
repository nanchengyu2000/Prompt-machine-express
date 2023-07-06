import {getUserToken} from "../ToolClass/JWT.js";
import * as userinfo from '../Dao/UserInfo.js'

async function getUserInfo(username:string):Promise<Object>{
  const infos=await userinfo.getUserInfo(username)
  return infos.length?infos[0]:{}
}
async function ChangeImage(path:string,username:string):Promise<boolean>{
  const res=await userinfo.ChangeImage(path,username)
  return res?true:false
}
async function UpadateInfo(oldname,newname){
    const result=await userinfo.UpadateInfo(oldname,newname)
    if (result) {
      const token=getUserToken(newname)
      return {status:200,token:token}
    }
    return {status:403}
}

export {getUserInfo,ChangeImage,UpadateInfo}