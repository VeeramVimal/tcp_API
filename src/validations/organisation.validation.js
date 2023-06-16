const Joi = require('joi')

const createOrganisation = {
    body: Joi.object().keys({
        organisation_name: Joi.string().required(),
        organisation_slogan: Joi.string(),
        organisation_gst_number: Joi.string(),
        organisation_type: Joi.string(),
        organisation_pan_number: Joi.string(),
        organisation_bank_details: Joi.string().required(),
        organisation_contact_name: Joi.string().allow('', null).required(),
        organisation_phone_number: Joi.number().allow('', null).required(),
        organisation_email: Joi.string().required(),
        organisation_address: Joi.string().allow('', null).required(),
        organisation_country: Joi.string().allow('', null).required(),
        organisation_tax_number: Joi.number(),
        organisation_TDS_applicable: Joi.boolean(),
        organisation_website: Joi.string(),
        organisation_logo: Joi.string(),
    })
}

const updateOrganisation = {
    params: Joi.object().keys({
        organisation_id: Joi.required()
    }),
    body: Joi.object().keys({
        organisation_name: Joi.string().required(),
        organisation_slogan: Joi.string(),
        organisation_gst_number: Joi.string(),
        organisation_type: Joi.string(),
        organisation_pan_number: Joi.string(),
        organisation_bank_details: Joi.string().required(),
        organisation_contact_name: Joi.string().allow('', null).required(),
        organisation_phone_number: Joi.number().allow('', null).required(),
        organisation_email: Joi.string().required(),
        organisation_address: Joi.string().allow('', null).required(),
        organisation_country: Joi.string().allow('', null).required(),
        organisation_tax_number: Joi.number(),
        organisation_TDS_applicable: Joi.boolean(),
        organisation_website: Joi.string(),
        organisation_lodgo: Joi.string(),
    })
}

const deleteOrganisation = {
    params: Joi.object().keys({
        organisation_id: Joi.required()
    })
}

const getOneOrganisation = {
    params: Joi.object().keys({
        organisation_id: Joi.required()
    })
}

module.exports = {
    createOrganisation,
    updateOrganisation,
    getOneOrganisation,
    deleteOrganisation
}