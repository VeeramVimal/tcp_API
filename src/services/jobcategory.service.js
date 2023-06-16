const httpStatus = require('http-status');
const { JobCategory } = require('../models');
const ApiError = require('../utils/ApiError');

const isJobsCategoryTaken = async function (category_name) {
  const user = await JobCategory.findOne({ where: { category_name } });
  return !!user;
};

/**
 * Create a JobsList
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createJobCategory = async (userBody) => {
    userBody.status = 1;
    if (await isJobsCategoryTaken(userBody.category_name)) {
        throw new ApiError(httpStatus.BAD_REQUEST, "category name already exist");
    }
    return JobCategory.create(userBody);

};


 const getAllCategory= async () => {
    const getAllpackage = await JobCategory.findAll();
    return getAllpackage;
  };


  /**
 * Get SinglePackage by category_idid
 * @param {ObjectId} category_id
 * @returns {Promise<User>}
 */
const getOneCategory = async (category_id) => {
    return JobCategory.findOne({ where: { category_id: category_id } })
};

/**
 * updateJobslistById
 * @param {ObjectId} category_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
 const updatecategory = async (category_id, updateBody) => {
    const Category = await getOneCategory(category_id);
    if (!Category) {
        throw new ApiError(httpStatus.NOT_FOUND, 'category type not found');
    }
    Object.assign(Category, updateBody);
    await Category.save();
    return Category;
};


/**
 * Delete Package by id
 * @param {ObjectId} category_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
 const deleteJobcategory = async (category_id) => {
    const deleteCategory = await getOneCategory(category_id);
    if (!deleteCategory) {
        throw new ApiError(httpStatus.NOT_FOUND, 'category not found');
    }
    Object.assign(deleteCategory);
    await deleteCategory.destroy( { where: { category_id: category_id } });
    return deleteCategory;
};

module.exports = {
    createJobCategory,
    getAllCategory,
    getOneCategory,
    updatecategory,
    deleteJobcategory
};
