const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { skillService } = require('../services');
const path = require('path')

const createskill = catchAsync(async (req, res) => {
  try {
    const createResponse = await skillService.createskills(req.body);
    if(createResponse){
      res.json({
        code: httpStatus.CREATED,
        message: 'skills added successfully'
      })
    }
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
})


const getAllskills = catchAsync(async (req, res) => {
  try {
    const applicantResponse = await skillService.getAllskills();
    res.send(applicantResponse)
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});


const getoneskill = catchAsync(async (req, res) => {
  try {
    const skillResponse = await skillService.getOneskills(req.params.skill_id)
    if(!skillResponse){
      throw new ApiError(httpStatus.BAD_REQUEST, 'skill not found')
    }
    res.send(skillResponse)
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

  const updateskill = catchAsync(async (req, res) => {
    try {
      const updateResponse = await skillService.updateskills(req.params.skill_id, req.body);
      if(updateResponse){
        res.json({
          code: httpStatus.OK,
          message: 'skills updated successfully'
        })
      }
    } catch (err) {
      res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  });

  const deleteskill = catchAsync(async (req, res) => {
    try {
      const createResponse = await skillService.deleteskills(req.params.skill_id);
      if(createResponse){
        res.json({
          code: httpStatus.OK,
          message: 'skills deleted successfully'
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
    createskill,
    getAllskills,
    deleteskill,
    updateskill,
    getoneskill
};  