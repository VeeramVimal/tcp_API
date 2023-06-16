const multer = require("multer");
const path = require("path");
const express = require("express");
var app = express();
const fs = require("fs");
// const { MulterError } = require("multer");

const mimeType = {
    applicant_cv: ["application/pdf", "application/msword"],
    employee_avatar: ["image/jpeg", "image/jpg", "image/png"],
    applicant_image: ["image/jpeg", "image/jpg", "image/png"],
    add_file: ["application/pdf", "image/jpg", "application/msword", "image/jpeg", "image/png"],
    assets_picture: ["image/jpeg", "image/jpg", "image/png"],
    organisation_logo: ["image/jpeg", "image/jpg", "image/png"],
    upload_file: ["application/pdf", "image/jpg", "application/msword", "image/jpeg", "image/png"],
    expense_bill: ["application/pdf", "image/jpg", "application/msword", "image/jpeg", "image/png"],
    card_image: ["image/jpeg", "image/jpg", "image/png"],
    testing: ["image/jpeg", "image/jpg", "image/png"]
}

const fileLocation = {
    applicant_cv: "./upload/applicant_cv",
    applicant_image: "./upload/applicant_image",
    employee_avatar: "./upload/employee_avatar",
    add_file: "./upload/add_file",
    assets_picture: "./upload/assets_picture",
    organisation_logo: "./upload/organisation_logo",
    upload_file: "./upload/upload_file",
    expense_bill: "./upload/expense_bill",
    card_image: "./upload/card_image",
    testing: "./upload/testing"
}

const fileFilterFunction = (req, file, cb) => {
    if(mimeType[file.fieldname].includes(file.mimetype)) return cb(null, true)
    else return cb(new Error('not the file type'))
}

const fileDestination = (req, file, cb) => {
    if(fileLocation[file.fieldname]){
        if (!fs.existsSync(fileLocation[file.fieldname])){
            fs.mkdirSync(fileLocation[file.fieldname]);
        }
        return cb(null, fileLocation[file.fieldname])
    }
    else return cb(null, './upload')
}

const fileNameFunction = (req, file, cb) => {
    req.body[file.fieldname] = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
}

const storage = new multer.diskStorage({
    // destination: './upload',
    destination: fileDestination,
    filename: fileNameFunction
})

const upload = new multer({
    storage: storage,
    fileFilter: fileFilterFunction
    // limits: {fileSize: 1024 * 1800}
})

module.exports=upload;