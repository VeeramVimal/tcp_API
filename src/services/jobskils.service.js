const httpStatus = require('http-status');
const { JobSkils } = require('../models');
const ApiError = require('../utils/ApiError');

const isJobsListTaken = async function (skil_name) {
  const user = await JobSkils.findOne({ where: { skil_name } });
  return !!user;
};

/**
 * Create a JobsList
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createJobskils = async (userBody) => {
    userBody.status = 1;
    if (await isJobsListTaken(userBody.skil_name)) {
        throw new ApiError(httpStatus.BAD_REQUEST, "skill name already exist");
      }
    return JobSkils.create(userBody);
};


 const getAlljobskils= async () => {
    const getAllpackage = await JobSkils.findAll();
    return getAllpackage;
  };


  /**
 * Get SinglePackage by skil_id
 * @param {ObjectId} skil_id
 * @returns {Promise<User>}
 */
const getOneJobskils = async (skil_id) => {
    return JobSkils.findOne({ where: { skil_id: skil_id } })
};

/**
 * updateJobslistById
 * @param {ObjectId} skil_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
 const updateJobskils = async (skil_id, updateBody) => {
    const Category = await getOneJobskils(skil_id);
    if (!Category) {
        throw new ApiError(httpStatus.NOT_FOUND, 'skil type not found');
    }
    Object.assign(Category, updateBody);
    await Category.save();
    return Category;
};


/**
 * Delete Package by id
 * @param {ObjectId} skil_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
 const deleteJobskils = async (skil_id) => {
    const deleteCategory = await getOneJobskils(skil_id);
    if (!deleteCategory) {
        throw new ApiError(httpStatus.NOT_FOUND, 'skils not found');
    }
    Object.assign(deleteCategory);
    await deleteCategory.destroy( { where: { skil_id: skil_id } });
    return deleteCategory;
};

module.exports = {
    createJobskils,
    getAlljobskils,
    getOneJobskils,
    updateJobskils,
    deleteJobskils
};
