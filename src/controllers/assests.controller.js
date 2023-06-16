const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { assetsService } = require('../services');


const createAssets = catchAsync(async (req, res) => {
    let data = req.body;
    if(req?.file?.path) data.assets_picture = req.file.path
    try{
        const createResponse = await assetsService.createAssets(req.body);
        if(createResponse){
        res.json({
          code: httpStatus.CREATED,
          message: 'assests created sucessfully',
       })
      }
    
    }
    catch(err){
      res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
    
    }); 

const getAllAssets = catchAsync(async (req, res) => {
  try {
    const assetsresult = await assetsService.getAllAssets();
    res.send(assetsresult);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});


const getOneAssets = catchAsync(async (req, res) => {
  try {
    const assetsget = await assetsService.getOneAssets(req.params.assets_id);
    res.send(assetsget);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const updateByAssets = catchAsync(async (req, res) => {
  try {
    let data = req.body;
    if(req?.file?.path) data.assets_picture = req.file.path
    const package = await assetsService.updateAssets(req.params.assets_id, req.body);
    res.send(package);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const deleteAssets = catchAsync(async (req, res) => {
    try{
        const deleteResponse = await assetsService.deleteAssets(req.params.assets_id);
        if(deleteResponse) {
          res.json({
            code: httpStatus.CREATED,
            message: 'assests deleted successfully'
          })
        }
      }
      catch(err){
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
          code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
          message: err.message ||'internal server error'
        })
      }
    });
    


module.exports = {
    createAssets,
    getAllAssets,
    getOneAssets,
    updateByAssets,
    deleteAssets
};  