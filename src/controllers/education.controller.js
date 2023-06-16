const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { educationService } = require('../services');


const createEducation = catchAsync(async (req, res) => {
    try{
        const education = await educationService.createEducation(req);
        if(education){
            res.json({
                code: httpStatus.CREATED,
                message: 'education created successfully'
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

const getAllEducation = catchAsync(async (req, res) => {
    try{
        const educationresult = await educationService.getAllEducation(req.user_id);
        res.send(educationresult);
    }
    catch(err){
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});


const getOneEducation = catchAsync(async (req, res) => {
    try{
        const educationget = await educationService.getOneEducation(req.params.education_id);
        if (!educationget) {
            throw new ApiError(httpStatus.BAD_REQUEST, 'Education not found');
        }
        res.send(educationget);
    }
    catch(err){
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});

const updateByEducation = catchAsync(async (req, res) => {
    try{
        const educationresponse = await educationService.updateEducation(req.params.education_id, req.body);
        if(educationresponse){
            res.json({
                code: httpStatus.CREATED,
                message: 'education updated successfully'
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

const deleteEducation = catchAsync(async (req, res) => {
    try{
        const deleteresponse = await educationService.deleteEducation(req.params.education_id);
        if(deleteresponse){
            res.json({
                code: httpStatus.OK,
                message: 'education deleted successfully'
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
    createEducation,
    getAllEducation,
    getOneEducation,
    updateByEducation,
    deleteEducation
};  