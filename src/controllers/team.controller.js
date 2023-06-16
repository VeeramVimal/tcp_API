const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { teamService } = require('../services');


const createTeam = catchAsync(async (req, res) => {
    try {
        const createResponse = await teamService.createTeam(req.body);
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

const getAllTeam = catchAsync(async (req, res) => {
    try {
        const team = await teamService.getAllTeam();
        res.send(team);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});


const getOneTeam = catchAsync(async (req, res) => {
    try {
        const team = await teamService.getOneTeam(req.params.team_id);
        if (!team) {
            throw new ApiError(httpStatus.NOT_FOUND, 'Team not found');
        }
        res.send(team);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});

const updateTeam = catchAsync(async (req, res) => {
    try {
        const teamupdt = await teamService.updateTeam(req.params.team_id, req.body);
        res.send(teamupdt);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});

const deleteTeam = catchAsync(async (req, res) => {
    try {
        await teamService.deleteTeam(req.params.team_id);
        res.json("Team Deleted Success");
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});

//   const getOneTeam = catchAsync(async (req, res) => {
//     try {
//       const team = await teamService.getOneTeam(req.params.team_id)
//       if(!team){
//         throw new ApiError(httpStatus.BAD_REQUEST, 'Teamemployee not found')
//       }
//       res.send(team)
//     } catch (err) {
//       res.json({
//         code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
//         message: err.message || "internal server error"
//       })
//     }
//   });

//   const updateTeam = catchAsync(async (req, res) => {
//     try {
      
//       const package = await teamService.updateTeam(req.params.team_id, req.body);
//       res.send(package);
//     } catch (err) {
//       res.json({
//         code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
//         message: err.message ||'internal server error'
//       })
//     }
//   });
//   const deleteTeam = catchAsync(async (req, res) => {
//     try {
//       const deleteResponse = await teamService.deleteTeam(req.params.team_id);
//       if (deleteResponse) {
//         res.json({
//           code: httpStatus.CREATED,
//           message: "Teamemployee deleted successfully",
//         });
//       }
//     } catch (err) {
//       res.json({
//         code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
//         message: err.message || "internal server error",
//       });
//     }
//   });
module.exports = {
    createTeam,
    getAllTeam,
    getOneTeam,
    updateTeam,
    deleteTeam
};  