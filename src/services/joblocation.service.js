const httpStatus = require('http-status');
const { JobLocation } = require('../models');
const ApiError = require('../utils/ApiError');

const isJobsLocationTaken = async function (location_name) {
  const user = await JobLocation.findOne({ where: { location_name } });
  return !!user;
};

/**
 * Create a JobsList
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createLocation = async (userBody) => {
    userBody.status = 0;
    if (await isJobsLocationTaken(userBody.location_name)) {
        throw new ApiError(httpStatus.BAD_REQUEST, " location name already exist");
      }
    return JobLocation.create(userBody);
};

 const getAllLocation= async () => {
  
    const getAllpackage = await JobLocation.findAll();
    return getAllpackage;
  };


  /**
 * Get SinglePackage by location_id
 * @param {ObjectId} location_id
 * @returns {Promise<User>}
 */
const getOneLocation = async (location_id) => {
    return JobLocation.findOne({ where: { location_id: location_id } })
};

/**
 * updateJobslistById
 * @param {ObjectId} location_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
 const updateLocation = async (location_id, updateBody) => {
    const Category = await getOneLocation(location_id);
    if (!Category) {
        throw new ApiError(httpStatus.NOT_FOUND, 'location type not found');
    }
    Object.assign(Category, updateBody);
    await Category.save();
    return Category;
};


/**
 * Delete Package by id
 * @param {ObjectId} location_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
 const deleteLocation = async (location_id) => {
    const deleteCategory = await getOneLocation(location_id);
    if (!deleteCategory) {
        throw new ApiError(httpStatus.NOT_FOUND, 'location not found');
    }
    Object.assign(deleteCategory);
    await deleteCategory.destroy( { where: { location_id: location_id } });
    return deleteCategory;
};

module.exports = {
    createLocation,
    getAllLocation,
    getOneLocation,
    updateLocation,
    deleteLocation
};
