const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { JobslistService } = require('../services');

const CreateJobsList = catchAsync(async (req, res) => {
  const jobsCategory = await JobslistService.createJobsList(req.body);
  res.status(httpStatus.CREATED).send(jobsCategory);
});

// const getAllJobslists = catchAsync(async (req, res) => {
//     const jobsresult = await JobslistService.getAllJobslist();
//     res.send(jobsresult);
//   });

  const getFilteredJobslists = catchAsync(async (req, res) => {
    try {
      const filteredList = await JobslistService.getFilteredJobslist(req.body);
      res.send(filteredList)
    } catch (err) {
      res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  })

  const getOneJobslists = catchAsync(async (req, res) => {
    try {
      const jobslist = await JobslistService.getOneJobslist(req.params.job_id);
      if (!jobslist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Joblist not found');
      }
      res.send(jobslist);
    } catch (err) {
      res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  });

  const getAllJobs = catchAsync(async (req, res) => {
    try {
      const alljobs = await JobslistService.getAllJobs();
      res.send(alljobs);
    } catch (err) {
      res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  })

  const updateJobslists = catchAsync(async (req, res) => {
    try {
      const package = await JobslistService.updateJobslistById(req.params.job_id, req.body);
      res.send(package);
    } catch (err) {
      res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  });

  const deleteJobslists = catchAsync(async (req, res) => {
    try {
      
      await JobslistService.deleteJobslist(req.params.job_id);
      res.json("Job Deleted Success");
    } catch (err) {
      res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  });
  

module.exports = {
    CreateJobsList,
    // getAllJobslists,
    getOneJobslists,
    updateJobslists,
    deleteJobslists,
    getAllJobs,
    getFilteredJobslists
};  