const httpStatus = require('http-status')
const { Clock, Employee, User, ClockSetting } = require('../models')
const ApiError = require('../utils/ApiError');
const sequalize = require('sequelize');
const moment = require("moment")

const isUserClockIn = async function (date, user_id) {
    const user = await Clock.findOne({ where: { date, user_id } });
    return !!user;
}
/**
 * Create a ClockIn
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createClock = async (userBody) => {
    var date = moment(new Date()).format("YYYY-MM-DD");
    if (userBody.date == date) {
        if (await isUserClockIn(userBody.date, userBody.user_id)) {
            throw new ApiError(httpStatus.BAD_REQUEST, 'Today your atternance its over ');
        }
    }
    return Clock.create(userBody);
};
const getAllClock = async () => {
    const getAllclock = await Clock.findAll()
    return getAllclock;
};
/**
* Get SinglePackage by expense_idid
* @param {ObjectId}   clock_id
* @returns {Promise<User>}
*/
const getOneClock = async (clock_id) => {
    const getSingleClock = await Clock.findOne({ where: { clock_id: clock_id } })
    return getSingleClock;
};

/**
 * updateJobslistById
 * @param {ObjectId}   clock_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateClock = async (clock_id, updateBody) => {
    const Clock = await getOneClock(clock_id);
    // if (!Leave) {
    //     throw new ApiError(httpStatus.NOT_FOUND, 'Leave is not found');
    // }
    Object.assign(Clock, updateBody);
    await Clock.save();
    return Clock;
};


/**
 * Delete Package by id
 * @param {ObjectId}   clock_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
const deleteClock = async (clock_id) => {
    const deleteClock = await getOneClock(clock_id);
    if (!deleteClock) {
        throw new ApiError(httpStatus.NOT_FOUND, 'category not found');
    }
    Object.assign(deleteClock);
    await deleteClock.destroy({ where: { clock_id: clock_id } });
    return deleteClock;
};

module.exports = {
    createClock,
    getAllClock,
    getOneClock,
    updateClock,
    deleteClock

};