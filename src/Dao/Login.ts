import executeQuery from './pool.js'
import bcrypt from 'bcrypt';
//用户登录
async function userLogin(username:string,password:string):Promise<boolean>{
  let query="SELECT * FROM userinfo WHERE name=?"
  const user=await executeQuery(query,[username])
  if (user.length) { 
    const passwordMatch = await bcrypt.compare(password, user[0].password)
    return passwordMatch?true:false
  }
  return false
}
//用户注册
async function userSign(username:string,password:string,):Promise<object>{
  let result=""
  let query="SELECT * FROM userinfo WHERE name=?"
  const info=await executeQuery(query,[username]) 
  if (info.length) {
    const passwordMatch = await bcrypt.compare(password, info[0].password)
    return passwordMatch?{state:403,message:"注册失败！"}:{state:405,message:"用户名已占用"}
  }else{
    query="INSERT INTO userinfo(name,password,image) VALUES(?,?,?)"
    const saltRounds = 10;
    const hashedPassword = await  bcrypt.hash(password, saltRounds)
    let params=[username,hashedPassword,"default.jpeg"]
    result=await executeQuery(query,params)
    return result?{state:203,message:"注册成功!"}:{state:401,message:"注册失败!"} 
  }
  
}

//查看是否重名


export {userLogin,userSign}