const httpStatus = require('http-status')
const { Assets, Givenassests, Employee } = require('../models')
const ApiError = require('../utils/ApiError');
const removeFile = require('../utils/removeFile');


/**
 * Create a JobsList
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createAssets = async (userBody) => {
    if(await findBySerialNo(userBody.assets_serialno)) throw new ApiError(httpStatus.BAD_REQUEST, "asset already added")
    return await Assets.create(userBody);
};


const getAllAssets = async () => {
    const getAllpackage = await Assets.findAll();
    return getAllpackage;
};


/**
* Get SinglePackage by expense_idid
* @param {ObjectId}   assets_id
* @returns {Promise<User>}
*/
const getOneAssets = async (assets_id) => {
    
    const assetOne = await Assets.findOne({ where: { assets_id: assets_id } })
    if (!assetOne) {
        throw new ApiError(httpStatus.NOT_FOUND, 'assets not found');
    }
    return assetOne
};

const findBySerialNo = async (assets_serialno) => {
    const assetSerial = await Assets.findOne({ where: { assets_serialno : assets_serialno}})
}

/**
 * updateJobslistById
 * @param {ObjectId}    assets_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateAssets = async (assets_id, updateBody) => {
    const Assets = await getOneAssets(assets_id);
    if(Assets.assets_picture) removeFile(Assets.assets_picture)
    if (!Assets) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Assets  type not found');
    }
    Object.assign(Assets, updateBody);
    await Assets.save();
    return Assets;
};


/**
 * Delete Package by id
 * @param {ObjectId}   assets_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
const deleteAssets = async (assets_id) => {
    const deleteAssets = await getOneAssets(assets_id);
    if(Assets.assets_picture) removeFile(Assets.assets_picture)
    if (!deleteAssets) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'bad request');
    }
    Object.assign(deleteAssets);
    await deleteAssets.destroy({ where: { assets_id: assets_id } });
    return deleteAssets;
};


module.exports = {
    createAssets,
    getAllAssets,
    getOneAssets,
    updateAssets,
    deleteAssets
};