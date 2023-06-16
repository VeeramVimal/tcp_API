const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { employeeorgService } = require('../services')

const getAllEmployeeOrg = catchAsync(async (req, res) => {
    try {
        const EmployeeOrg = await employeeorgService.getAllEmployeeOrg()
        res.send(EmployeeOrg)
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message || "internal server error"
        })
    }
})

const getOneEmployeeOrg = catchAsync(async (req, res) => {
    try {
        const EmployeeOrg = await employeeorgService.getOneEmployeeOrg(req.params.id)
        res.send(EmployeeOrg)
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message || "internal server error"
        })
    }
})


const createEmployeeOrg = catchAsync(async (req, res) => {
    try {
        const EmployeeOrg = await employeeorgService.createEmployeeOrg(req.body)
        res.status(httpStatus.CREATED).json({
            code: httpStatus.CREATED,
            message: "employee added to the organization"
        })
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message || "internal server error"
        })
    }
})

const updateEmployeeOrg = catchAsync(async (req, res) => {
    try {
        const EmployeeOrg = await employeeorgService.updateEmployeeOrg(req.body, req.params.id)
        res.send(httpStatus.OK, EmployeeOrg)
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message || "internal server error"
        })
    }
})


const deleteEmployeeOrg = catchAsync(async (req, res) => {
    try {
        const EmployeeOrg = await employeeorgService.deleteEmployeeOrg(req.params.id)
        res.send(httpStatus.OK, EmployeeOrg)
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message || "internal server error"
        })
    }
})

module.exports = {
    getAllEmployeeOrg,
    getOneEmployeeOrg,
    createEmployeeOrg,
    updateEmployeeOrg,
    deleteEmployeeOrg
}