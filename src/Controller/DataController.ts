import * as data from '../Serve/Data.js'

/* 
      获取所有的类型
*/
async function getAlltype(req,res){
      res.json(await data.getAlltype());
}
async function getAll(req,res){
      res.json(await data.getAll());
}
/* 
      插入所有的数据（前端文件读取的json数据）
*/
async function insertData(req,res){  
      const datas=req.body;
      res.send(await data.insertData(datas))
}
async function Pagings(req,res){  
      let page = req.query.page ? parseInt(req.query.page as string)>0?parseInt(req.query.page as string):1 : 1; // 从查询参数中获取页码，默认为第一页
      const pageSize = 10; // 每页显示的记录数
      res.json(await data.Pagings(pageSize,page)) 
}
async function getData(req,res){
      let {sort,type}=req.query
      res.json(await data.getData(sort,type))
}
export {getAlltype,Pagings,insertData,getData,getAll}