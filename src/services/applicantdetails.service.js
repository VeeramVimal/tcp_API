const httpStatus = require('http-status');
const { Applicantdetails } = require('../models');
const ApiError = require('../utils/ApiError');
const removeFile = require('../utils/removeFile');

/**
 * Create a JobsList
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createApplicant = async (req) => {
    const existingApplicants = await findOneApplicant(req.user_id)
    if(existingApplicants) throw new ApiError(httpStatus.BAD_REQUEST, 'Applicant already have applicant detail try to edit data');
    let Body= req.body;
    if(req.files?.applicant_cv) Body.applicant_cv = req.files.applicant_cv[0].path
    if(req.files?.applicant_image) Body.applicant_image = req.files.applicant_image[0].path
    const applicant = await Applicantdetails.create({...Body, user_id: req.user_id});
    return applicant;
};


 const getAllApplicant= async () => {
    const getAllpackage = await Applicantdetails.findAll();
    return getAllpackage;
  };


const findOneApplicant = async (user_id) => {
    const oneapplicant = await Applicantdetails.findOne({ 
        where: { user_id: user_id } })
    return oneapplicant
};

  /**
 * Get Applicant by applicant_id
 * @param {ObjectId} applicant_id
 * @returns {Promise<User>}
 */
const getOneApplicant = async (user_id) => {
    const oneapplicant = await Applicantdetails.findOne({ 
        where: { user_id: user_id } })
    if(!oneapplicant) throw new ApiError(httpStatus.BAD_REQUEST, 'Applicant details not found')
    return oneapplicant
};

/**
 * update Applicant by user_id
 * @param {ObjectId} user_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
 const updateApplicant = async (req) => {
    let Body = req.body;
    const Applicant = await getOneApplicant(req.user_id);
    if(req.files){
      if(req.files?.applicant_cv) { 
        removeFile(Applicant.applicant_cv)
        Body.applicant_cv = req.files.applicant_cv[0].path 
    }
      if(req.files?.applicant_image){
        removeFile(Applicant?.applicant_image)
        Body.applicant_image = req.files.applicant_image[0].path
        }
    }
    if (!Applicant) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Applicantdetails not found');
    }
    Object.assign(Applicant, Body);
    const updatedValue = await Applicant.save();
    return updatedValue
};


/**
 * Delete Applicant by user_id
 * @param {ObjectId} user_id
 * @returns {Promise<User>}
 */
 const deleteApplicant = async (user_id) => {
    const deleteCategory = await getOneApplicant(user_id);
    if (!deleteCategory) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Applicant not found');
    }
    removeFile(Applicant.applicant_cv)
    removeFile(Applicant.applicant_image)
    const deleteResponse = await deleteCategory.destroy( { where: { user_id: user_id } });
    return deleteResponse;
};



module.exports = {
    createApplicant,
    deleteApplicant,
    findOneApplicant,
    getOneApplicant,
    updateApplicant,
    getAllApplicant
};
