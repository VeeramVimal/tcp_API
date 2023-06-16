const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { JobCategoryservice } = require('../services');

const createCategory = catchAsync(async (req, res) => {
  try{
    const category = await JobCategoryservice.createJobCategory(req.body);
    if(createdresponse){
      res.json({
        code: httpStatus.CREATED,
        message: "jobcategory created successfully"
      })
    }
    res.send(category);
  }
  catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
  });

const getAllJobcategory = catchAsync(async (req, res) => {
  try{
    const jobsresult = await JobCategoryservice.getAllCategory();
    res.send(jobsresult);
  }
  catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
  });


  const getByCategory = catchAsync(async (req, res) => {
    try{
      const jobslist = await JobCategoryservice.getOneCategory(req.params.category_id);
      if (!jobslist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Job Category not found');
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

  const updateByCategory = catchAsync(async (req, res) => {
    try{
      const package = await JobCategoryservice.updatecategory(req.params.category_id, req.body);
      res.send(package)
    } catch(err){
      res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  });

  const deletecategory = catchAsync(async (req, res) => {
    try{
      const deleteResponse = await JobCategoryservice.deleteJobcategory(req.params.category_id);
       if(deleteResponse) {
         res.json({
           code: httpStatus.CREATED,
           message: 'jobcategory deleted successfully'
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
    createCategory,
    getAllJobcategory,
    getByCategory,
    updateByCategory,
    deletecategory
};  