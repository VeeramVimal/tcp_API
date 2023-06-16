const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { noticeboardorgService } = require('../services')

const getAllnoticeOrg = catchAsync(async (req, res) => {
    try {
        const EmployeeOrg = await noticeboardorgService.getAllnoticeboard()
        res.send(httpStatus.OK, EmployeeOrg)
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message || "internal server error"
        })
    }
})

const getOnenoticeOrg = catchAsync(async (req, res) => {
    try {
        const EmployeeOrg = await noticeboardorgService.getOnenoticeboard()
        res.send(httpStatus.OK, EmployeeOrg)
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message || "internal server error"
        })
    }
})


const createnoticeOrg = catchAsync(async (req, res) => {
    try {
        const category = await noticeboardorgService.createnoticeboard(req.body)
        res.send(httpStatus.OK, category)
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message || "internal server error"
        })
    }
})

const updatenoticeOrg = catchAsync(async (req, res) => {
    try {
        const EmployeeOrg = await noticeboardorgService.updatenoticeboard()
        res.send(httpStatus.OK, EmployeeOrg)
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message || "internal server error"
        })
    }
})


const deletenoticeOrg = catchAsync(async (req, res) => {
    try {
        const EmployeeOrg = await noticeboardorgService.deletenoticebboard()
        res.send(httpStatus.OK, EmployeeOrg)
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message || "internal server error"
        })
    }
})

module.exports = {
    getAllnoticeOrg,
    getOnenoticeOrg,
    createnoticeOrg,
    updatenoticeOrg,
    deletenoticeOrg
}