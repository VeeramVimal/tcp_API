const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { timeService } = require('../services');

const createTime = catchAsync(async (req, res) => {
  try{
    const createResponse = await timeService.createTime(req.body);
    if(createResponse){
    res.json({
      code: httpStatus.CREATED,
      message: 'Time created sucessfully',
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
 

const getAllTime = catchAsync(async (req, res) => {
  try {
    const time = await timeService.getAllTime();
    res.send(time);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});


const getOneTime = catchAsync(async (req, res) => {
  try {
    const time = await timeService.getOneTime(req.params.time_id)
    res.send(time)
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
})
const updateTime = catchAsync(async (req, res) => {
  try {
    const package = await timeService.updateTime(req.params.time, req.body);
    res.send(package);
    
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const deleteTime = catchAsync(async (req, res) => {
  try{
    const deleteResponse = await timeService.deleteTime(req.params.time);
    if(deleteResponse) {
      res.json({
        code: httpStatus.CREATED,
        message: 'Time deleted successfully'
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
  createTime,
  getAllTime,
  getOneTime,
  updateTime,
  deleteTime
};  