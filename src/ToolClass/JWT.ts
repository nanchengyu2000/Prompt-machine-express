import jsonwebtoken from "jsonwebtoken";
//普通用户
function getUserToken(username:string):any{
  return jsonwebtoken.sign({username:username},process.env.secretKey,{expiresIn:process.env.expiresIn})
}

export {getUserToken}