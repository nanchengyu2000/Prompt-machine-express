import {getUserToken} from "../ToolClass/JWT.js";
import * as Login from  '../Dao/Login.js'


async function userLogin(username:string,password:string):Promise<object>{
    //进行登录验证
    let result={}
    if (await Login.userLogin(username,password)) {
      //生成token
    //参数1是用户的信息对象  参数2：加密的密钥  参数3：配置对象，可以配置当前的token
    //注意：千万不要把密码加密到token中
      const token=getUserToken(username)
      result={
        status:200,
        message:"登录成功",
        token
      }
      return result 
    }
    result={state:500,message:"登录失败"}
    return result  
}
async function userSign(username:string,password:string):Promise<object>{
  return await Login.userSign(username,password)
}
export {userLogin,userSign}