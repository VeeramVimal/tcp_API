const httpStatus = require('http-status');
const { skilldetails } = require('../models');
const ApiError = require('../utils/ApiError');

const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'harigarangs1999@gmail.com',
      pass: 'yuoisicpxywfhvwz'
    }
  });

const isSkillTaken = async function (skill_name) {
    const user = await skilldetails.findOne({ where: { skill_name } });
    return !!user;
  };


/**
 * Create a Client Details
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
 const createskills = async (userBody) => {
     console.log("userbody", userBody)
    userBody.status = 0;
    if (await isSkillTaken(userBody.skill_name)) {
        throw new ApiError(httpStatus.BAD_REQUEST, "skill name already exist");
      }
    return skilldetails.create(userBody);
};

/**
 * Create a Client Details
 * @returns {Promise<User>}
 */

 const getAllskills= async () => {
    const getAllpackage = await skilldetails.findAll();
    return getAllpackage;
  };


  /**
 * Get Clientdetails by client_id
 * @param {ObjectId} skill_id
 * @returns {Promise<User>}
 */
const getOneskills = async (skill_id) => {
    const Applicant = await skilldetails.findOne({ where: { skill_id: skill_id } })
    if (!Applicant) {
        throw new ApiError(httpStatus.NOT_FOUND, 'skill not found');
      }
    return Applicant
};

/**
 * update Clientdetails by client_id
 * @param {ObjectId} skill_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
 const updateskills = async (skill_id, updateBody) => {
    const Client = await getOneskills(skill_id);
    if (!Client) {
        throw new ApiError(httpStatus.NOT_FOUND, 'skill not found');
    }
    Object.assign(Client, updateBody);
    await Client.save();
    return Client;
};


/**
 * Delete Clientdetails by id
 * @param {ObjectId} skill_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
 const deleteskills = async (skill_id) => {
    const deleteClient = await getOneskills(skill_id);
    if (!deleteClient) {
        throw new ApiError(httpStatus.NOT_FOUND, 'skill not found');
    }
    Object.assign(deleteClient);
    await deleteClient.destroy( { where: { skill_id: skill_id } });
    return deleteClient;
};



module.exports = {
    createskills,
    getAllskills,
    getOneskills,
    updateskills,
    deleteskills
};
