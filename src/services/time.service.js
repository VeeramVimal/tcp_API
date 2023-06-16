const httpStatus = require('http-status');
const { Time, Task, Project } = require('../models');
const ApiError = require('../utils/ApiError');
const { getOneTask } = require('./task.service')



/**
 * Create a Time
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createTime = async (userBody) => {
   
    if(await getOneTask(userBody.task_id === null)) throw new ApiError(httpStatus.BAD_REQUEST, "Task not found") 
    return await Time.create(userBody);
};


const getAllTime = async () => {
    const getAllTime = await Time.findAll(
        {
            include:[{
                model: Task,
                required: true
            }]
    },
    {
        include:[{
            model: Project,
            required: true
        }]
}
    )
    return getAllTime;
};

const countAllTime = async (time_id) => {
    return Time.findAll({
        where:{total_hours: time_id}
    })
}

const getOneTime = async (time_id) => {
    return Time.findOne({ where: { time_id: time_id } })
};
/**
* Get SinglePackage by time_id
* @param {ObjectId} time_id
* @returns {Promise<User>}
*/
const getByTime = async (time_id) => {
    return Time.findOne({ where: { time_id: time_id } })
};

/**
 * updateJobslistById
 * @param {ObjectId} time_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateTime = async (time_id, updateBody) => {
    const Time = await getOneTime(time_id);
    if (!Time) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'time type not found');
    }
    Object.assign(Time, updateBody);
    const timeResponse = await Time.save();
    return timeResponse;
};


/**
 * Delete Package by id
 * @param {ObjectId} time_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
 const deleteTime = async (time_id) => {
    const deleteTime = await getOneTime(time_id);
    if (!deleteTime) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'time not found');
    }
    const deleteResponse = await deleteTime.destroy({ where: { time_id: time_id } });
    return deleteResponse;
};


module.exports = {
    createTime,
    getOneTime,
    getAllTime,
    getByTime,
    updateTime,
    deleteTime,
    countAllTime
};
