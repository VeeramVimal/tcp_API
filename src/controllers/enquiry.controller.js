const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')
const { enquiryService } = require('../services')

const getEnquiry = catchAsync(async (req,res) => {
    try {
        const getResponse = await enquiryService.getEnquiry()
        res.send(getResponse)
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
})

const createEnquiry = catchAsync(async (req,res) => {
    try {
        const createResponse = await enquiryService.createEnquiry({...req.body, enquiry_status: 'pending'})
        res.send(createResponse)
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
})

const updateEnquiry = catchAsync(async (req,res) => {
    try {
        const updateResponse = await enquiryService.updateEnquiry(req.params, {enquiry_status: req.body.enquiry_status })
        res.send(updateResponse)
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
})

const getOneEnquiry = catchAsync(async (req,res) => {
    try {
        const getOneResponse = await enquiryService.getOneEnquiry(req.params)
        res.send(getOneResponse)
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
})

const deleteEnquiry = catchAsync(async (req,res) => {
    try {
        const deleteResponse = await enquiryService.deleteEnquiry(req.params)
        res.send({status:deleteResponse})
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message ||'internal server error'
          })
    }
})

module.exports = {
    getEnquiry,
    createEnquiry,
    updateEnquiry,
    getOneEnquiry,
    deleteEnquiry
}