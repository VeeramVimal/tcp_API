const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { JobLocationService } = require('../services');

const createJobLocation = catchAsync(async (req, res) => {
  try{
    const category = await JobLocationService.createLocation(req.body);
    if(category){
      res.json({
        code: httpStatus.CREATED,
        message: "joblocation created successfully"
      })
    }
    res.status(httpStatus.CREATED).send(category);
  }
  catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
  });

const getAllJobLocation = catchAsync(async (req, res) => {
  try{
    const jobslocation = await JobLocationService.getAllLocation();
    res.send(jobslocation);
  }
  catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
  });


  const getByLocation = catchAsync(async (req, res) => {
    try{
      const jobslist = await JobLocationService.getOneLocation(req.params.location_id);
      if (!jobslist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Job location not found');
      }
      res.json(jobslist)
    }
    catch(err){
      res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  });

  const updateByLocation = catchAsync(async (req, res) => {
    try {
      const package = await JobLocationService.updateLocation(req.params.location_id, req.body);
      res.send(package);
    } catch (err) {
      res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  });

  const deleteLocation = catchAsync(async (req, res) => {
    try{
      const deleteResponse = await JobLocationService.deleteLocation(req.params.location_id);
       if(deleteResponse) {
         res.json({
           code: httpStatus.CREATED,
           message: 'joblocation deleted successfully'
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
    createJobLocation,
    getAllJobLocation,
    getByLocation,
    updateByLocation,
    deleteLocation
};  