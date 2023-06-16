const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { givenService } = require('../services');


const createGiven = catchAsync(async (req, res) => {
 
    try{
        const createResponse = await givenService.createGiven(req.body);
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

const getAllGiven = catchAsync(async (req, res) => {
  try {
    const assetsresult = await givenService.getAllGiven();
    res.send(assetsresult);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});


const getOneGiven = catchAsync(async (req, res) => {
  try {    
    const assetsget = await givenService.getOneGiven(req.params.id);
    if (!assetsget) {
        throw new ApiError(httpStatus.NOT_FOUND, 'assets not found');
    }
    res.send(assetsget);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const getEmployeeAssets = catchAsync(async (req, res) => {
  try {    
    const assetsget = await givenService.getEmployeeAssets(req.params.id);
    res.send(assetsget);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const getFunctionalAssets = catchAsync(async (req, res) => {
  try {    
    const assetsget = await givenService.getFunctionalAssets();
    res.send(assetsget);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const updateByGiven = catchAsync(async (req, res) => {
  try {
    const package = await givenService.updateGiven(req.params.id, req.body);
    res.send(package);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const deleteGiven = catchAsync(async (req, res) => {
    try{
        const deleteResponse = await givenService.deleteGiven(req.params.id);
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
    createGiven,
    getAllGiven,
    getOneGiven,
    updateByGiven,
    deleteGiven,
    getFunctionalAssets,
    getEmployeeAssets
};  