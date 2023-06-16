const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { applicantdetailsService } = require('../services');
// const upload = require('../config/multer');
const path = require('path')

// const createApplicants = catchAsync(async (req, res) => {
    // let data = req.body;
    // data.applicant_cv = req.file.path
    // const applicant = await applicantService.createApplicant(data);
    // const jobapply = {
    //   user_id: applicant.user_id,
    //   job_id: data.job_id,
    //   status: 1
    // }
    // const jobapplication = await appliedJobsService.createAppliedJobs(jobapply);
    // res.status(httpStatus.CREATED).send({...applicant.dataValues, ...jobapplication.dataValues});
//   });

const createApplicants = catchAsync(async (req, res) => {
  try {
    const createResponse = await applicantdetailsService.createApplicant(req);
    if(createResponse){
      res.json({
        code: httpStatus.CREATED,
        message: 'applicant details added successfully'
      })
    }
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
})


const getAllApplicants = catchAsync(async (req, res) => {
  try {
    const applicantResponse = await applicantdetailsService.getAllApplicant();
    res.send(applicantResponse)
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});


const getoneApplicants = catchAsync(async (req, res) => {
  try {
    const applicantResponse = await applicantdetailsService.getOneApplicant(req.user_id)
    if(!applicantResponse){
      throw new ApiError(httpStatus.BAD_REQUEST, 'applicant not found')
    }
    res.send(applicantResponse)
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

  const updateApplicants = catchAsync(async (req, res) => {
    try {
      const updateResponse = await applicantdetailsService.updateApplicant(req);
      if(updateResponse){
        res.json({
          code: httpStatus.OK,
          message: 'applicant details updated successfully'
        })
      }
    } catch (err) {
      res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  });

  const deleteApplicants = catchAsync(async (req, res) => {
    try {
      const createResponse = await applicantdetailsService.deleteApplicant(req.user_id);
      if(createResponse){
        res.json({
          code: httpStatus.OK,
          message: 'applicant details deleted successfully'
        })
      }
    } catch (err) {
      res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  });
  
module.exports = {
    createApplicants,
    getAllApplicants,
    deleteApplicants,
    updateApplicants,
    getoneApplicants
};  