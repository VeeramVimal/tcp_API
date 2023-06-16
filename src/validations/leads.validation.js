const Joi = require('joi')

const createLead = {
    body: Joi.object().keys({
        lead_name: Joi.string().required(),
        lead_email: Joi.string().required(),
        salutation: Joi.number(),
        choose_agent: Joi.number(),
        lead_source: Joi.number().allow('', null),
        lead_category: Joi.number(),
        lead_value: Joi.string().allow('', null),
        allow_followup: Joi.number().allow('', null),
        note: Joi.string().allow('', null),
        company_name: Joi.string().allow('', null),
        website: Joi.string().allow('', null),
        mobile: Joi.string().allow('', null),
        office_phone_number: Joi.string().allow('', null),
        country: Joi.number().allow('', null),
        state: Joi.string().allow('', null),
        city: Joi.string().allow('', null),
        postal_code: Joi.string().allow('', null),
        address: Joi.string().allow('', null),
        status: Joi.number().required()
    })
}

const updateLead = {
    params: Joi.object().keys({
        lead_id: Joi.required()
    }),
    body: Joi.object().keys({
        lead_name: Joi.string().required(),
        lead_email: Joi.string().required(),
        salutation: Joi.number(),
        choose_agent: Joi.number(),
        lead_source: Joi.number().allow('', null),
        lead_category: Joi.number(),
        lead_value: Joi.string().allow('', null),
        allow_followup: Joi.number().allow('', null),
        note: Joi.string().allow('', null),
        company_name: Joi.string().allow('', null),
        website: Joi.string().allow('', null),
        mobile: Joi.string().allow('', null),
        office_phone_number: Joi.string().allow('', null),
        country: Joi.number().allow('', null),
        state: Joi.string().allow('', null),
        city: Joi.string().allow('', null),
        postal_code: Joi.string().allow('', null),
        address: Joi.string().allow('', null),
        status: Joi.number().required()
    })
}

const deleteLead = {
    params: Joi.object().keys({
        lead_id: Joi.required()
    })
}

const getOneLead = {
    params: Joi.object().keys({
        lead_id: Joi.required()
    })
}

module.exports = {
    createLead,
    updateLead,
    getOneLead,
    deleteLead
}