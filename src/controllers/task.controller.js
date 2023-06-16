const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { taskService, projectService } = require("../services");

const createTask = catchAsync(async (req, res) => {
  let data = req.body;
  if(req.file) data.add_file = req.file.path
  try {
    const createResponse = await taskService.createTask(req.body);
    if (createResponse) {
      res.json({
        code: httpStatus.CREATED,
        message: "task created successfully",
      });
    }
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const getShortTask = catchAsync(async (req, res) => {
  try {
    const task = await taskService.getShortTask();
    res.send(task);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});


const deleteTask = catchAsync(async (req, res) => {
  try {
    const deleteResponse = await taskService.deleteTask(req.params.task);
    if (deleteResponse) {
      res.json({
        code: httpStatus.CREATED,
        message: "task deleted sucessfully",
      });
    }
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});
const getAllTask = catchAsync(async (req, res) => {
  try {
    const task = await taskService.getAllTask();
    res.send(task);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const getEmployeeTask = catchAsync(async (req, res) => {
  try {
    const task = await taskService.getEmployeeTask(req.user_id);
    res.send(task);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const getOneTask = catchAsync(async (req, res) => {
  try {
    const task = await taskService.getOneTask(req.params.task_id);
    if (!task) {
      throw new ApiError(httpStatus.NOT_FOUND, "task not found");
    }
    res.send(task);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const updateTask = catchAsync(async (req, res) => {
  try {
    let data = req.body;
    if(req.file) data.add_file = req.file.path
    const package = await taskService.updateTask(req.params.task_id, req.body);
    res.send(package);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

module.exports = {
  createTask,
  getAllTask,
  getOneTask,
  updateTask,
  deleteTask,
  getEmployeeTask,
  getShortTask,
};
