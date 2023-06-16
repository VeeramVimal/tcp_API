const Joi = require('joi')

const createLeave = {
    body: Joi.object().keys({
        employee_id: Joi.number().required(),
        date: Joi.string().required(),
        leave_type: Joi.number().required(),
        reason: Joi.string().allow('', null).required(),
        select_duration: Joi.number().allow('', null).required(),
        status: Joi.number().required(),
    })
}

const updateLeave = {
    params: Joi.object().keys({
        leave_id: Joi.required()
    }),
    body: Joi.object().keys({
        employee_id: Joi.number().required(),
        date: Joi.string(),
        leave_type: Joi.number(),
        reason: Joi.string().allow('', null),
        select_duration: Joi.number().allow('', null),
        status: Joi.number().required(),
    })
}

const deleteLeave = {
    params: Joi.object().keys({
        leave_id: Joi.required()
    })
}

const getOneLeave = {
    params: Joi.object().keys({
        leave_id: Joi.required()
    })
}

module.exports = {
    createLeave,
    updateLeave,
    getOneLeave,
    deleteLeave
}