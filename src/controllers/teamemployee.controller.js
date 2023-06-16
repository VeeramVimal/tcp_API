const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { teamemployeeService } = require('../services');


const createTeamemployee = catchAsync(async (req, res) => {
    try {
        const createResponse = await teamemployeeService.createTeamemployee(req.body);
        if (createResponse) {
            res.json({
                code: httpStatus.CREATED,
                message: 'Teamemployee created sucessfully',
            })
        }

    }
    catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }

});
const getAllTeamemployee = catchAsync(async (req, res) => {
    try {
        const teamemployee = await teamemployeeService.getAllTeamemployee();
        res.send(teamemployee);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});

  const getOneTeamemployee = catchAsync(async (req, res) => {
    try {
      
      const ticket = await teamemployeeService.getOneTeamemployee(req.params.team_id);
      if (!ticket) {
        throw new ApiError(httpStatus.NOT_FOUND, "Teamemployee not found");
      }
      res.send(ticket);
    } catch (err) {
      res.json({
        code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message ||'internal server error'
      })
    }
  });



const updateTeamemployee = catchAsync(async (req, res) => {
    try {
        const teamemployeeupdt = await teamemployeeService.updateTeamemployee(req.params.team_id, req.body);
        res.send(teamemployeeupdt);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});

const deleteTeamemployee = catchAsync(async (req, res) => {
    try {
        await teamemployeeService.deleteTeamemployee(req.params.team_id);
        res.json("Teamemployee Deleted Successfully");
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});


module.exports = {
    createTeamemployee,
    getAllTeamemployee,
    getOneTeamemployee,
    updateTeamemployee,
    deleteTeamemployee
};  