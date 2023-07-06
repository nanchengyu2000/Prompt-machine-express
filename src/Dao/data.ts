import executeQuery from './pool.js'

async function getAlltype():Promise<any[]>{
    const query="SELECT DISTINCT type FROM data"
    return await executeQuery(query)
}
async function getAll(){
  const query="SELECT * FROM data"
  return await executeQuery(query)
}
async function getTotal():Promise<number>{
  const query="SELECT count(*) FROM data"
  let total =await executeQuery(query)
  return total[0]['count(*)']
}
async function insertData(datas):Promise<number>{
  let result=0
  let params=[]
  let query=""
  // console.log(datas);
  for(let index=0;index<datas.length;index++){
    query='INSERT INTO data(sort,type,English,Chinese,weight,isactive) VALUES(?,?,?,?,?,?)'
    params=Object.values(datas[index])
    result+=await executeQuery(query,params)
  }
  if (result==datas.length) {
    return 1  //表示全部数据插入成功
  }else if (result<datas.length&&result!=0) {
    return -1  //表示没完全插入
  }
  return 0   //表示
}

async function Pagings(offset: number,pageSize:number):Promise<Array<any>>{
    const query="SELECT * FROM data LIMIT ?, ?"
    let params=[offset,pageSize]
    return await executeQuery(query,params)
}

async function getData(sort:string,type:string):Promise<Array<any>>{
  const query="SELECT * FROM data WHERE sort=? AND type=?"
  let params=[sort,type]
  return await executeQuery(query,params)
}

export {getAlltype,insertData,Pagings,getTotal,getData,getAll}