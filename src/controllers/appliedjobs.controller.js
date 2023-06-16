const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { appliedJobsService } = require('../services');

const createAppliedJobs = catchAsync(async (req, res) => {
  try{
    const createdresponse = await appliedJobsService.createAppliedJobs({
      job_id: req.body.job_id, 
      user_id: req.user_id,
      status:1
    })
    if(createdresponse){
      res.json({
        code: httpStatus.CREATED,
        message: "applied for the job successfully"
      })
    }
  }
  catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
})
 
const getAllAppliedJobs = catchAsync(async (req, res) => {
  try{
    const jobsresult = await appliedJobsService.getAllAppliedJobs();
    res.send(jobsresult);
  }
  catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const getUserAppliedJobs = catchAsync(async (req, res) => {
  try{
    const appliedjobs = await appliedJobsService.getApplicationByUserId(req.user_id);
    res.send(appliedjobs);
  }
  catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const getOneAppliedJobs = catchAsync(async (req, res) => {
  try{
    const appliedjobs = await appliedJobsService.getOneAppliedJobs(req.params.appliedjobs_id);
    // if (!appliedjobs) {
    //   throw new ApiError(httpStatus.NOT_FOUND, 'Job Application not found');
    // }
    res.send(appliedjobs);
  }
  catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const updateAppliedJobs = catchAsync(async (req, res) => {
  try{
    console.log(req.params, req.body, "body params")
    const package = await appliedJobsService.updateAppliedJobs(req.params.appliedjob_id, req.body);
    res.send(package);
  }
  catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});
  
// const getAllAppliedJobs = catchAsync(async (req, res) => {
//   try{
//     const jobsResponse = await appliedJobsService.getAllAppliedJobs(req.params.appliedjobs_id);
//     res.send(jobsResponse)
//   }
//   catch(err){
//     res.json({
//       code:err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
//       message: err.message || 'internal server error'
//     })
//   }
// })


const getApplicantDetailsByApplicationId = catchAsync(async (req, res) => {
  try{
    const jobsResponse = await appliedJobsService.getApplicantDetailsByApplicationId(req.params.appliedjob_id);
    res.send(jobsResponse)
  }
  catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
})

const getApplicantDetailsByUserId = catchAsync(async (req, res) => {
  try{
    const jobsResponse = await appliedJobsService.getApplicantDetailsByApplicationId(req.params.appliedjob_id);
    res.send(jobsResponse)
  }
  catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
})

const deleteAppliedJobs = catchAsync(async (req, res) => {
  try{
    const jobsResponse = await appliedJobsService.deleteAppliedJobs(req.params.job_id, req.user_id);
    res.send({
      code: httpStatus.OK,
      message: 'the application deleted successfully'
    })
  }
  catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
})

const deleteBulkAppliedJobs = catchAsync(async (req, res) => {
  console.log(req.query)
  try{
    const jobsResponse = await appliedJobsService.deleteBulkAppliedJobs(req.query.job_id, req.user_id);
    res.send({
      code: httpStatus.OK,
      message: 'the application deleted successfully',
      job: jobsResponse
    })
  }
  catch(err){
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
})
  
module.exports = {
    getAllAppliedJobs,
    getUserAppliedJobs,
    getOneAppliedJobs,
    updateAppliedJobs,
    createAppliedJobs,
    getApplicantDetailsByApplicationId,
    getApplicantDetailsByUserId,
    deleteAppliedJobs,
    deleteBulkAppliedJobs
};  