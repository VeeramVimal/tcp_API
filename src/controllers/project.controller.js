const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/ApiError");
const { projectService } = require("../services");
const path = require("path");
const httpStatus = require("http-status");

const getALLProject = catchAsync(async (req, res) => {
  try {
    const project = await projectService.getAllProject();
    res.send(project);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const getOneProject = catchAsync(async (req, res) => {
  try {
    const project = await projectService.getOneProject(req.params.project_id);
    res.send(project);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const updateProject = catchAsync(async (req, res) => {
  let data = req.body;
  if(req.file) data.add_file = req.file.path
  try {
    const updateResponse = await projectService.updateProject(
      req.params.project_id,
      req.body
    );
    res.send(updateResponse);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const getShortProject = catchAsync(async (req, res) => {
  try {
    const project = await projectService.getShortProject();
    res.send(project);
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});

const createProject = catchAsync(async (req, res) => {
  let data = req.body;
  if(req.file) data.add_file = req.file.path
  try {
    const createResponse = await projectService.createProject(req.body);
    if (createResponse) {
      res.json({
        code: httpStatus.CREATED,
        message: "project created sucessfully",
      });
    }
  } catch (err) {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      message: err.message ||'internal server error'
    })
  }
});


const deleteProject = catchAsync(async (req, res) => {
  try {
    const deleteResponse = await projectService.deleteProject(
      req.params.project_id
    );
    if (deleteResponse) {
      res.json({
        code: httpStatus.OK,
        message: "ticket deleted successfully",
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
  getALLProject,
  getShortProject,
  getOneProject,
  createProject,
  updateProject,
  deleteProject,
};
