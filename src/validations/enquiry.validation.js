const Joi = require('joi')

const createEnquiry = {
    body: Joi.object().keys({
        enquiry_name: Joi.string().required(),
        enquiry_email: Joi.string().email().required(),
        enquiry_message: Joi.string().required()
    })
}

const updateEnquiry = {
    params: Joi.object().keys({
        enquiry_id: Joi.required()
    }),
    body: Joi.object().keys({
        enquiry_status: Joi.string().required().valid('pending', 'resolved')
    })
}
const deleteEnquiry = {
    params: Joi.object().keys({
        enquiry_id: Joi.required()
    })
}

const getOneEnquiry = {
    params: Joi.object().keys({
        enquiry_id: Joi.required()
    })
}

module.exports = {
    createEnquiry,
    updateEnquiry,
    getOneEnquiry,
    deleteEnquiry
}