const httpStatus = require("http-status")
const {ClockSetting} =require("../models")
const ApiError = require('../utils/ApiError');

const getAllSetting = async () => {
    const getAllValue = await ClockSetting.findAll()
    return getAllValue;
}
/**
 * Create a ClockSetting
 * @param {Object} userBody
 * @returns {Promise<User>}
 */

const createClockSetting = async (userBody) => {

    return ClockSetting.create(userBody);
}

module.exports = {
    createClockSetting,
    getAllSetting
}