const httpStatus = require('http-status');
const { Noticeboard } = require('../models');
const ApiError = require('../utils/ApiError');


/**
 * Create a JobsList
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
 const createNotice = async (userBody) => {
    return Noticeboard.create(userBody);
};

 const getAllNotice= async () => {
    const getAllpackage = await Noticeboard.findAll();
    return getAllpackage;
  };


  /**
 * Get SinglePackage by noticeboard_id
 * @param {ObjectId} noticeboard_id
 * @returns {Promise<User>}
 */
const getOneNotice = async (noticeboard_id) => {
    return Noticeboard.findOne({ where: { noticeboard_id: noticeboard_id } })
};

/**
 * updateJobslistById
 * @param {ObjectId} noticeboard_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
 const updateNotice = async (noticeboard_id, updateBody) => {
    const Category = await getOneNotice(noticeboard_id);
    if (!Category) {
        throw new ApiError(httpStatus.NOT_FOUND, 'noticeboard not found');
    }
    Object.assign(Category, updateBody);
    await Category.save();
    return Category;
};


/**
 * Delete Package by id
 * @param {ObjectId} noticeboard_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
 const deleteNotice = async (noticeboard_id) => {
    const deleteCategory = await getOneNotice(noticeboard_id);
    if (!deleteCategory) {
        throw new ApiError(httpStatus.NOT_FOUND, 'noticeboard not found');
    }
    Object.assign(deleteCategory);
    await deleteCategory.destroy( { where: { noticeboard_id: noticeboard_id } });
    return deleteCategory;
};

module.exports = {
    createNotice,
    getAllNotice,
    getOneNotice,
    updateNotice,
    deleteNotice
};
