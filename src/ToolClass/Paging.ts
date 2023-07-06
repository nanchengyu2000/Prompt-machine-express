//创建一个分页器
class Paging {
  private total: number
  private pageSize: number  //每页数量
  private totalPages:number  //页数
  /* 
    total：所有数据量
    pageSize:每一页的数据
  */
  constructor(total:number,pageSize:number){
      this.total=total
      this.pageSize=pageSize
      this.totalPages = Math.ceil(total / pageSize);
  }
  getOffset(page:number):number{
    return (page - 1) * this.pageSize;
  } 
  getTotalPages():number{
    return this.totalPages;
  }
}

export default Paging