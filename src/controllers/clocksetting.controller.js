const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const {clockSetting, getAllSetting} = require("../services");

const getAllSettings = catchAsync(async (req, res) => {
    try {
        const getResponse = await clockSetting.getAllSetting()
        res.send(getResponse);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message || "internal server error"
        })
    }
})

const createClockSetting = catchAsync(async (req, res) => {
    try {
        const createResponse = await clockSetting.createClockSetting(req.body)
        if (createResponse) {
            res.json({
                code: httpStatus.CREATED,
                message: "clockSetting is Created"
            });
        }
        res.send(createResponse);
    } catch (err) {
        res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            code: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
            message: err.message || "internal server error"
        })
    }
});


module.exports = {
    createClockSetting,
    getAllSettings
}