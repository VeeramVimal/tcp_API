const { Enquiry } = require('../models')

/** 
 * Get Enquiry
 * @param noParams
 * @returns {Promise<Enquiry/>}
 */

const getEnquiry = async () => {
    return Enquiry.findAll({
        order:[['createdAt','DESC']]
    })
}

/** 
 *  Create New Enquiry
 * @param {Object} enquiryBody
 * @returns {Promise<Enquiry/>}
 */

const createEnquiry = async (enquiryBody) => {
    return Enquiry.create(enquiryBody)
}
/**
 *  Update Enquiry
 *  @param {Object} enquiry_id, updatedObject
 *  @returns {Promise<Enquiry/>}
 */

const updateEnquiry = async (params, updatedEnquiry) => {
    return Enquiry.update(updatedEnquiry, { where: params })
}
 
/**
 * Get One Enquiry
 * @param {Object} enquiry_id
 * @returns {Promise<Enquiry/>}
 */
const getOneEnquiry = async (params) => {
    return Enquiry.findOne({where: params})
}

/**
 * Delete One Enquiry
 * @param {Object} enquiry_id
 * @returns {Promise<Enquiry/>}
 */
 const deleteEnquiry = async (params) => {
    return Enquiry.destroy({where: params})
}


module.exports = {
    getEnquiry,
    createEnquiry,
    updateEnquiry,
    getOneEnquiry,
    deleteEnquiry
}