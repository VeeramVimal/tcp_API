const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination: './upload/avatar',
    filename: (req, file, cb) =>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const avatar = multer({
    storage: storage,
    // limits: {fileSize: 1024 * 1800}
})

module.exports=avatar;