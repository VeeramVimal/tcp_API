const Joi = require('joi')

const createGiven = {
    body: Joi.object().keys({
        assets_status: Joi.number(),
        assets_notes: Joi.string(),
        assets_id: Joi.number(),
        user_id: Joi.number(),
        assets_dategiven: Joi.date(),
        assets_datereturn: Joi.date(),
    })
}

const updateGiven = {
    params: Joi.object().keys({
        id: Joi.required()
    }),
    body: Joi.object().keys({
        assets_status: Joi.number(),
        assets_notes: Joi.string(),
        assets_id: Joi.number(),
        user_id: Joi.number(),
        assets_dategiven: Joi.date(),
        assets_datereturn: Joi.date(),
    })
}

const deleteGiven = {
    params: Joi.object().keys({
      id: Joi.required()
    })
}

const getOneGiven = {
    params: Joi.object().keys({
        id: Joi.required()
    })
}

module.exports = {
    createGiven,
    updateGiven,
    deleteGiven,
    getOneGiven
}