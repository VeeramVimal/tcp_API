const Joi = require('joi')

const createWorkexperience = {
    body: Joi.object().keys({
        work_title: Joi.string().required(),
        work_company: Joi.string(),
        work_timeperiod: Joi.string(),
        work_description: Joi.string(),
    })
}

const getOneWorkexperience = {
    params: Joi.object().keys({
        work_id: Joi.required()
    })
}

const updateWorkexperience = {
    params: Joi.object().keys({
        work_id: Joi.required()
    }),
    body: Joi.object().keys({
        work_title: Joi.string(),
        work_company: Joi.string(),
        work_timeperiod: Joi.string(),
        work_description: Joi.string()
    })
}

const deleteWorkexperience = {
    params: Joi.object().keys({
        work_id: Joi.required()
    })
}

module.exports = {
    createWorkexperience,
    updateWorkexperience,
    getOneWorkexperience,
    deleteWorkexperience
}