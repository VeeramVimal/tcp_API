const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const jwtVerify = require('./../utils/jwt')
const catchAsync = require('../utils/catchAsync');
const { favjobsService, tokenService } = require('../services');



const getFavJobs = catchAsync(async (req, res) => {
    try {
        const favjobresult = await favjobsService.getFavJobs(req.user_id);
        res.send(favjobresult);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});


const createFavJobs = catchAsync(async (req, res) => {
    try{
        const favjobresponse= await favjobsService.addFavJobs(req)
        if(favjobresponse){
            res.json({
                code:httpStatus.CREATED,
                message:"favjobs added successfully"
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

const deleteFavJobs = catchAsync(async (req, res) => {
    try{
        const favjobdelete = await favjobsService.deleteFavJobs(req);
        if(favjobdelete) res.json({
            code: httpStatus.OK,
            message: 'Job remove from favjobs'
        });
        if(!favjobdelete) res.json({
            code: httpStatus.BAD_REQUEST,
            message: 'Unable to remove from favjobs'
        })
    }
    catch(err){
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});


module.exports = {
    getFavJobs,
    createFavJobs,
    deleteFavJobs
};  