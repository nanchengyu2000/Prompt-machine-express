import executeQuery from './pool.js'

async function getUserInfo(username:string):Promise<Array<object>>{
  const query="SELECT name,image FROM userinfo WHERE name=?"
  const userinfos=await executeQuery(query,[username])
  return userinfos
}
async function ChangeImage(path:string,username:string):Promise<number>{
  const query="UPDATE userinfo SET image=? WHERE name=?"
  let params=[path,username]
  const res=await executeQuery(query,params)
  return res
}
async function UpadateInfo(oldname,newname){
    const query="UPDATE userinfo SET name=? WHERE name=?"
    return await executeQuery(query,[newname,oldname]) 
}
export {getUserInfo,ChangeImage,UpadateInfo}