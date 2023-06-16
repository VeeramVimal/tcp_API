const Joi = require('joi')

const createDashboardcard = {
    body: Joi.object().keys({
        card_name: Joi.string().required(),
        card_count: Joi.number(),
        card_image: Joi.string(),
    })
}

const updateDashboardcard = {
    params: Joi.object().keys({
        card_id: Joi.required()
    }),
    body: Joi.object().keys({
        status: Joi.string().required().valid('pending', 'resolved')
    })
}

const deleteDashboardcard = {
    params: Joi.object().keys({
        card_id: Joi.required()
    })
}

const getOneDashboardcard = {
    params: Joi.object().keys({
        card_id: Joi.required()
    })
}

module.exports = {
    createDashboardcard,
    updateDashboardcard,
    getOneDashboardcard,
    deleteDashboardcard
}