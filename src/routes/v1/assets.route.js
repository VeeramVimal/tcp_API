const express = require('express')
const { assetsController } = require('../../controllers')
const validate = require('../../middlewares/validate')
const auth = require('../../middlewares/auth')
const { assets } = require('../../validations')
const upload = require('../../config/multer')
const httpStatus = require('http-status')
const router = express.Router()
const removeFile = require("../../utils/removeFile")

// router.post('/testing', upload.single('testing'), (req,res)=>{
//     try{
//         res.json({
//             code: httpStatus.OK,
//             message: "ok file created",
//             filePath: req.file.path
//         })
//     }
//     catch(err){
//         res.json(err)
//     }
// })

// router.delete('/testing', async (req,res) =>{
//     try {
//         const deleteRes = await removeFile(req)
//         res.json({
//             code: httpStatus.OK,
//             message: "ok file is deleted",
//             response: deleteRes
//         })
//     } catch (err) {
//         console.log(err)
//         res.json({
//             code: httpStatus.BAD_REQUEST,
//             message: err.message
//         })
//     }
// })



router.get('/', assetsController.getAllAssets)
router.get('/:assets_id', validate(assets.getOneAssets), assetsController.getOneAssets)
router.post('/', upload.single('assets_picture'), validate(assets.createAssets), assetsController.createAssets)
router.put('/:assets_id', upload.single('assets_picture'), validate(assets.updateAssets), assetsController.updateByAssets)
router.delete('/:assets_id', validate(assets.deleteAssets), assetsController.deleteAssets)

module.exports = router