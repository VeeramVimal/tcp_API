const httpStatus = require('http-status');
const { Organization } = require('../models');
const ApiError = require('../utils/ApiError');

// const isJobsListTaken = async function (skil_name) {
//   const user = await JobSkils.findOne({ where: { skil_name } });
//   return !!user;
// };

  
/**
 * Create a organisation
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
 const createOrganisation = async (userBody) => {
   
    return Organization.create(userBody);
};


 const getAllorganisation= async () => {
    const getAllpackage = await Organization.findAll();
    return getAllpackage;
  };


  /**
 * Get SinglePackage by organisation_id
 * @param {ObjectId} organisation_id
 * @returns {Promise<User>}
 */
const getOneorganisation = async (organisation_id) => {
    return Organization.findOne({ where: { organisation_id : organisation_id } })
};

/**
 * updateJobslistById
 * @param {ObjectId} organisation_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
 const updateorganisation = async (organisation_id, updateBody) => {
    const Category = await getOneorganisation(organisation_id);
    if (!Category) {
        throw new ApiError(httpStatus.NOT_FOUND, 'orginization type not found');
    }
    Object.assign(Category, updateBody);
    await Category.save();
    return Category;
};


/**
 * Delete Package by id
 * @param {ObjectId} organisation_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
 const deleteorganisation = async (organisation_id) => {
    const deleteCategory = await getOneorganisation(organisation_id);
    if (!deleteCategory) {
        throw new ApiError(httpStatus.NOT_FOUND, 'organization not found');
    }
    Object.assign(deleteCategory);
    await deleteCategory.destroy( { where: { organisation_id: organisation_id } });
    return deleteCategory;
};

module.exports = {
    createOrganisation,
    getAllorganisation,
    getOneorganisation,
    updateorganisation,
    deleteorganisation
};
