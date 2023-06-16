const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { JobSkilsService } = require('../services');

const createJobSkils = catchAsync(async (req, res) => {
  try{
    const category = await JobSkilsService.createJobskils(req.body);
    if(category){
      res.json({
        code: httpStatus.CREATED,
        message: "jobskills created successfully"
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

const getAllJobSkils = catchAsync(async (req, res) => {
  try{
    const jobsresult = await JobSkilsService.getAlljobskils();
    res.send(jobsresult);
  }
  catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
  });


  const getBySkils = catchAsync(async (req, res) => {
    try{
      const jobslist = await JobSkilsService.getOneJobskils(req.params.skil_id);
      if (!jobslist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Job skills not found');
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

  const updateBySkils = catchAsync(async (req, res) => {
    try {
      const package = await JobSkilsService.updateJobskils(req.params.skil_id, req.body);
      res.send(package);
    } catch (err) {
      res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  });

  const deleteSkils = catchAsync(async (req, res) => {
    try{
      const deleteResponse = await JobSkilsService.deleteJobskils(req.params.skil_id);
       if(deleteResponse) {
         res.json({
           code: httpStatus.CREATED,
           message: 'jobskill deleted successfully'
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
    createJobSkils,
    getAllJobSkils,
    getBySkils,
    updateBySkils,
    deleteSkils
};  