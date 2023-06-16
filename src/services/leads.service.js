const httpStatus = require('http-status')
const { Leads } = require('../models')
const ApiError = require('../utils/ApiError');



/**
 * Create a JobsList
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createLead = async (userBody) => {
    return Leads.create(userBody);
};


const getAllLead = async () => {
    const getAllLead = await Leads.findAll({
    });
    return getAllLead;
};


/**
* Get SinglePackage by expense_idid
* @param {ObjectId}   lead_id
* @returns {Promise<User>}
*/
const getOneLead = async (lead_id) => {
    return Leads.findOne({ where: { lead_id: lead_id } })
};

/**
 * updateJobslistById
 * @param {ObjectId}   lead_id
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateLead = async (lead_id, updateBody) => {
    const Leads = await getOneLead(lead_id);
    if (!Leads) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Lead is not found');
    }
    Object.assign(Leads, updateBody);
    await Leads.save();
    return Leads;
};


/**
 * Delete Package by id
 * @param {ObjectId}   lead_id
 * @param {Number} [is_active]
 * @returns {Promise<User>}
 */
const deleteLead = async (lead_id) => {
    const deleteLead = await getOneLead(lead_id);
    if (!deleteLead) {
        throw new ApiError(httpStatus.NOT_FOUND, 'lead not found');
    }
    Object.assign(deleteLead);
    await deleteLead.destroy({ where: { lead_id: lead_id } });
    return deleteLead;
};

module.exports = {
    createLead,
    getAllLead,
    getOneLead,
    updateLead,
    deleteLead
};
