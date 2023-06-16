const httpStatus = require('http-status')
const { Leave, Employee } = require('../models')
const ApiError = require('../utils/ApiError');
const { getOneEmployee } = require('./employee.service')
const sequalize = require('sequelize');

// const isJobsListTaken = async function (item_name) {
//     const user = await Jobslist.findOne({ where: { item_name } });
//     return !!user;
// }
/**
 * Create a JobsList
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createLeave = async (userBody) => {
    // if(!await getOneEmployee(userBody.employee_id)) new ApiError(httpStatus.BAD_REQUEST, "employee not found")
    return Leave.create(userBody);
};

const getLeave = async () => {
    // console.log("getAllleave=======================", getAllleave)

    const getAllleave = await Leave.findAll(
        {
        include:[{
            model: Employee,
            // attributes: ['employee_id']
        }]
    }
    )
    return getAllleave;
};
/**
* Get SinglePackage by expense_idid
* @param {ObjectId}   leave_id
* @returns {Promise<User>}
*/
const getOneLeave = async (leave_id) => {
    return await Leave.findOne({ where: { leave_id: leave_id } })
};




/**
 * updateJobslistById
 * @param {ObjectId}   leave_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateLeave = async (leave_id, updateBody) => {
    const Leave = await getOneLeave(leave_id);
    // if (!Leave) {
    //     throw new ApiError(httpStatus.NOT_FOUND, 'Leave is not found');
    // }
    Object.assign(Leave, updateBody);
    await Leave.save();
    return Leave;
};


/**
 * Delete Package by id
 * @param {ObjectId}   leave_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
const deleteLeave = async (leave_id) => {
    const deleteLeave = await getOneLeave(leave_id);
    if (!deleteLeave) {
        throw new ApiError(httpStatus.NOT_FOUND, 'category not found');
    }
    Object.assign(deleteLeave);
    await deleteLeave.destroy({ where: { leave_id: leave_id } });
    return deleteLeave;
};

module.exports = {
    createLeave,
    getLeave,
    getOneLeave,
    updateLeave,
    deleteLeave
 
};
