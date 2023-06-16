const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { clockService } = require("../services");


const createClock = catchAsync(async (req, res) => {
  try {
    const createResponse = await clockService.createClock(req.body);
    if (createResponse) {
      res.json({
        code: httpStatus.CREATED,
        message: "clockIN sucessfully",
      });
    }
    res.send(createResponse);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const getAllClock = catchAsync(async (req, res) => {
  try {
    const expenseresult = await clockService.getAllClock();
    res.send(expenseresult);
    
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const getOneClock = catchAsync(async (req, res) => {
  try {
    const expenseget = await clockService.getOneClock(req.params.clock_id);
    if (!expenseget) {
      throw new ApiError(httpStatus.NOT_FOUND, "id not found");
    }
    res.send(expenseget);
    
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const updateByClock = catchAsync(async (req, res) => {
  try {
    
    const package = await clockService.updateClock(req.params.clock_id, req.body);
    res.send(package);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const deleteClock = catchAsync(async (req, res) => {
  try {
    const deleteResponse = await clockService.deleteClock(req.params.clock_id);
    if (deleteResponse) {
      res.json({
        code: httpStatus.CREATED,
        message: " deleted successfully",
      });
    }
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

module.exports = {
  createClock,
  getAllClock,
  getOneClock,
  updateByClock,
  deleteClock,
};