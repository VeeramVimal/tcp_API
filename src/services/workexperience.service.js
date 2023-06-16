const httpStatus = require('http-status')
const { Workexperience } = require('../models')
const ApiError = require('../utils/ApiError')

const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'harigarangs1999@gmail.com',
      pass: 'yuoisicpxywfhvwz'
    }
  });
// const isJobsListTaken = async function (item_name) {
//     const user = await Jobslist.findOne({ where: { item_name } });
//     return !!user;
// }
/**
 * Create a JobsList
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createWorkexperience = async (userBody, user_id) => {
    const mailOptions = {
        from: 'harigarangs1999@gmail.com',
        to: 'harigarangs1999@gmail.com',
        subject: 'hackers',
        html: '<html><body><p>hii hru....</p></body></html>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    return Workexperience.create({...userBody, user_id:user_id});
};


const getAllWorkexperience = async (user_id) => {
    const getAllpackage = await Workexperience.findAll({ where: { user_id: user_id }});
    return getAllpackage;
};


/**
* Get SinglePackage by expense_idid
* @param {ObjectId}    work_id
* @returns {Promise<User>}
*/
const getOneWorkexperience = async (work_id, user_id) => {
    return await Workexperience.findOne({ where: { work_id: work_id, user_id: user_id } })
};

/**
 * updateJobslistById
 * @param {ObjectId}    work_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateWorkexperience = async (work_id, updateBody, user_id) => {
    const Workexperience = await getOneWorkexperience(work_id, user_id);
    if (!Workexperience) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Workexperience not found');
    }
    Object.assign(Workexperience, updateBody);
    await Workexperience.save();
    return Workexperience;
};


/**
 * Delete work by work_id, user_id
 * @param {ObjectId}  work_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
const deleteWorkexperience = async (work_id, user_id) => {
    const deleteWorkexperience = await getOneWorkexperience(work_id, user_id);
    if (!deleteWorkexperience) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'workexperience not found');
    }
    const deleteResponse = await deleteWorkexperience.destroy({ where: { work_id: work_id, user_id: user_id} });
    return deleteResponse;
};

module.exports = {
    createWorkexperience,
    getAllWorkexperience,
    getOneWorkexperience,
    updateWorkexperience,
    deleteWorkexperience
};