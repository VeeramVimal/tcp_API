const httpStatus = require('http-status')
const { Education } = require('../models')
const ApiError = require('../utils/ApiError')
const nodemailer = require('nodemailer');


// const isJobsListTaken = async function (item_name) {
//     const user = await Jobslist.findOne({ where: { item_name } });
//     return !!user;
// }
/**
 * Create a JobsList
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createEducation = async (req) => {
    const userBody = {...req.body, user_id: req.user_id}
    return Education.create(userBody);
};


const getAllEducation = async (user_id) => {
    const getAllpackage = await Education.findAll({
        user_id: user_id
    });
    return getAllpackage;
};


/**
* Get SinglePackage by expense_idid
* @param {ObjectId}  education_id
* @returns {Promise<User>}
*/
const getOneEducation = async (education_id) => {
    return Education.findOne({ where: { education_id: education_id } })
};

/**
 * updateJobslistById
 * @param {ObjectId}  education_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateEducation = async (education_id, updateBody) => {
    const Education = await getOneEducation(education_id);
    if (!Education) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Education  type not found');
    }
    Object.assign(Education, updateBody);
    await Education.save();
    return Education;
};


/**
 * Delete Package by id
 * @param {ObjectId}   education_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
const deleteEducation = async (education_id) => {
    const deleteEducation = await getOneEducation(education_id);
    if (!deleteEducation) {
        throw new ApiError(httpStatus.NOT_FOUND, 'education not found');
    }
    Object.assign(deleteEducation);
    await deleteEducation.destroy({ where: { education_id: education_id } });
    return deleteEducation;
};

module.exports = {
    createEducation,
    getAllEducation,
    getOneEducation,
    updateEducation,
    deleteEducation
};
