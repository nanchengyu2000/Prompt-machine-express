import * as data from '../Dao/data.js'
import Paging from '../ToolClass/Paging.js'

async function getAlltype():Promise<any[]>{
  return await data.getAlltype()
}
async function getAll() {
    return await data.getAll()
}
async function insertData(datas):Promise<number>{
  return await data.insertData(datas)
}
async function Pagings(pageSize: number,page:number){
  let total=await data.getTotal();  //调用dao获取总的数据量
  let paging=new Paging(total,pageSize)
  let totalPages=paging.getTotalPages()
  let offset:number=paging.getOffset(page)
  console.log(offset);
  return {data:await data.Pagings(offset,pageSize),pageSize,totalPages} //调用dao
}
async function getData(sort:string,type:string):Promise<Array<any>>{
  return await data.getData(sort,type)
}
export {getAlltype,insertData,Pagings,getData,getAll}
