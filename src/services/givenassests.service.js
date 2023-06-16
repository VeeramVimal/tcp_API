const httpStatus = require('http-status')
const { Givenassests, Assets, Employee, User } = require('../models')
const { getUserById } = require('./user.service')
const { getOneAssets } = require('./assets.service')
const ApiError = require('../utils/ApiError');
const { EMPLOYEE } = require('../constants');

/**
 * Create a JobsList
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createGiven = async (userBody) => {
  
    if(!await getUserById(userBody.user_id)) new ApiError(httpStatus.BAD_REQUEST, "User not found")
    if(!await getOneAssets(userBody.assets_id)) new ApiError(httpStatus.BAD_REQUEST, "Assets not found")
    return await Givenassests.create(userBody);
};

const getEmployeeAssets = async () => {
    return await Givenassests.findAll({
        include:[Assets],
        // where: {
        // user_id: user_id
    })
};

const getFunctionalAssets = async () => {
    return await Assets.findAll({
        where:{
            assets_status: 1
        }
    })
};


const getAllGiven = async () => {
    const getAllGiven = await Givenassests.findAll({
        include:[{
            model: Assets,
            required: true
        },
        {
            model: User,
            attributes:["id"],
            include:[{
                model: Employee,
                attributes:["employee_firstname", "employee_lastname"]
            }]
        }
        ]
    });
    return getAllGiven;
};


/**
* Get SinglePackage by expense_idid
* @param {ObjectId}   id
* @returns {Promise<User>}
*/
const getOneGiven = async (id) => {
    return await Givenassests.findOne({ where: { id:id } })
};

/**
 * updateJobslistById
 * @param {ObjectId}   id
 * @param {Object} updateBody
 * @returns { Promise<User>}
 */
const updateGiven = async (id, updateBody) => {
    const Assets = await getOneGiven(id);
    if (!Assets) {
        throw new ApiError(httpStatus.NOT_FOUND, 'assests type not found');
    }
    Object.assign(Assets, updateBody);
    await Assets.save();
    return Assets;
};


/**
 * Delete Package by id
 * @param {ObjectId}   id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
const deleteGiven = async (id) => {
    const deleteAssets = await getOneGiven(id);
    if (!deleteAssets) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'bad request');
    }
    Object.assign(deleteAssets);
    await deleteAssets.destroy({ where: { id: id } });
    return deleteAssets;
};
/**
 * Get all assets with Currently assinged user by asserts_id
 * @param {ObjectId}   assets_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
 

const getOneAssetsCurrentlyAssigned = async (user_id) => {
    const getAllpackage = await Givenassests.findAll({
        include:[
            {
                model: Assets
            },
            {
                model:Employee
            },
        ],
        where:{
            user_id: user_id,
            status: 1
        }
        
    });
   
    return getAllpackage;
};
module.exports = {
    createGiven,
    getAllGiven,
    getOneGiven,
    updateGiven,
    deleteGiven,
    getOneAssetsCurrentlyAssigned,
    getFunctionalAssets,
    getEmployeeAssets
};