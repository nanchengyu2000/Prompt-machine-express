import multer from 'multer'
import path from 'path'
import fs from 'fs'
class UploadFile {
  static upload(savepath:string):any{
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null,savepath); // 指定文件保存的目录
      },
      filename: (req, file, cb) => {
        const fileName = Date.now() + path.extname(file.originalname); // 生成文件名，使用当前时间戳和原始文件扩展名
        cb(null, fileName);
      }
    });
    return multer({ storage });
  }
}

export default UploadFile