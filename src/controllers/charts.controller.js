const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { chartsService } = require('../services');


const createCharts = catchAsync(async (req, res) => {
    // let data = req.body;
    // data.candidate_photo = req.file.filename
    // data.candidate_photo = req.file.path
    try {
        const expense = await chartsService.createCharts(req.body);
        res.status(httpStatus.CREATED).send(expense);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })      
    }
});

const getAllCharts = catchAsync(async (req, res) => {
    try {
        const chartsresult = await chartsService.getAllCharts();
        res.send(chartsresult);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});


const getOneCharts = catchAsync(async (req, res) => {
    try {
        const chartsget = await chartsService.getOneCharts(req.params.chart_id);
        if (!chartsget) {
            throw new ApiError(httpStatus.NOT_FOUND, 'Charts not found');
        }
        res.send(chartsget);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});

const updateByCharts = catchAsync(async (req, res) => {
    // let data = req.body;
    // data.candidate_photo = req.file.filename
    // data.candidate_photo = req.file.path
    try {
        const package = await chartsService.updateCharts(req.params.chart_id, req.body);
        res.send(package);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});

const deleteCharts = catchAsync(async (req, res) => {
    try {
        await chartsService.deleteCharts(req.params.chart_id);
        res.json("Job Deleted Success");
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});


module.exports = {
    createCharts,
    getAllCharts,
    getOneCharts,
    updateByCharts,
    deleteCharts
};  