const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { dashboardcardService,  leaveService, ticketService, taskService} = require('../services');


const createDashboardcard = catchAsync(async (req, res) => {
    try {
        let data = req.body;
        if(data?.file?.path) data.card_image = req.file.path
        const dashboardcard = await dashboardcardService.createDashboardcard(req.body);
        res.status(httpStatus.CREATED).send(dashboardcard);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});

const getAllDashboardcard = catchAsync(async (req, res) => {
    try {
        const dashboardcardresult = await dashboardcardService.getAllDashboardcard();
        res.send(dashboardcardresult);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});

const getOneDashboardcard = catchAsync(async (req, res) => {
    try {
        const dashboardcardget = await dashboardcardService.getOneDashboardcard(req.params.card_id);
        if (!dashboardcardget) {
            throw new ApiError(httpStatus.NOT_FOUND, 'Dashboardcard not found');
        }
        res.send(dashboardcardget);
    } 
    catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});

const updateByDashboardcard = catchAsync(async (req, res) => {
    try {
        let data = req.body;
        if(req?.file?.path) data.card_image = req.file.path
        const package = await dashboardcardService.updateDashboardcard(req.params.card_id, req.body);
        res.send(package);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});

const deleteDashboardcard = catchAsync(async (req, res) => {
    try {
        await dashboardcardService.deleteDashboardcard(req.params.card_id);
        res.json("Job Deleted Success");
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
});
const taskDashboard = catchAsync( async (req,res) => {
    try {
        const adminDashboard = await dashboardcardService.taskDashboardService()
        res.send(adminDashboard)
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
})
const ticketDashboard = catchAsync( async (req,res) => {
    try {
        const adminDashboard = await dashboardcardService.ticketDashboardService()
        res.send(adminDashboard)
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
})
const leaveDashboard = catchAsync( async (req,res) => {
    try {
        const adminDashboard = await dashboardcardService.leaveDashboardService()
        res.send(adminDashboard)
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
})

module.exports = {
    createDashboardcard,
    getAllDashboardcard,
    getOneDashboardcard,
    updateByDashboardcard,
    deleteDashboardcard,
    taskDashboard,
    ticketDashboard,
    leaveDashboard
};  