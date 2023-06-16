const catchAsync = require('../utils/catchAsync');
const { dashboardService } = require('../services')
const httpStatus = require('http-status')


const AdminDashboard = catchAsync( async (req,res) => {
    try {
        const adminDashboard = await dashboardService.AdminDashboardService()
        res.send(adminDashboard)
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
})

module.exports = {
    AdminDashboard
}