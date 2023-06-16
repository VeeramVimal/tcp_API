const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { workexperienceService } = require('../services');



const createWorkexperience = catchAsync(async (req, res) => {
    try{
        const expense = await workexperienceService.createWorkexperience(req.body, req.user_id);
        if(expense){
            res.json({
                code: httpStatus.CREATED,
                message: 'work experience created successfully'
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

const getAllWorkexperience = catchAsync(async (req, res) => {
    try{
        const expenseresult = await workexperienceService.getAllWorkexperience(req.user_id);
        res.send(expenseresult);
    }
    catch(err){
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});


const getOneWorkexperience = catchAsync(async (req, res) => {
    try{
        const expenseget = await workexperienceService.getOneWorkexperience(req.params.work_id, req.user_id);
        if (!expenseget) {
            throw new ApiError(httpStatus.NOT_FOUND, 'work experience not found');
        }
        res.send(expenseget);
    }
    catch(err){
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});

const updateByWorkexperience = catchAsync(async (req, res) => {
    try{
        const updateBody = await workexperienceService.updateWorkexperience(req.params.work_id, req.body, req.user_id);
        if(updateBody){
            res.json({
                code: httpStatus.OK,
                message: 'work experience updated successfully'
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

const deleteWorkexperience = catchAsync(async (req, res) => {
    try{
        await workexperienceService.deleteWorkexperience(req.params.work_id, req.user_id);
        res.json({
            code: httpStatus.OK,
            message: "work experience deleted success"
        });
    }
    catch(err){
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});


module.exports = {
    createWorkexperience,
    getAllWorkexperience,
    getOneWorkexperience,
    updateByWorkexperience,
    deleteWorkexperience
};  