const Joi = require('joi')

const createClock = {
    body: Joi.object().keys({
        user_id: Joi.number().required(),
        date: Joi.string().allow('', null),
        start_time: Joi.string().allow("", null),
        end_time: Joi.string().allow("", null),
        total_hours: Joi.string().allow("", null),
        count: Joi.number().allow("", null)
        
    })
}

const updateClock = {
    params: Joi.object().keys({
        clock_id: Joi.required()
    }),
    body: Joi.object().keys({
        user_id: Joi.number().required(),
        date: Joi.string().allow('', null),
        start_time: Joi.string().allow("", null),
        end_time: Joi.string().allow("", null),
        total_hours: Joi.string().allow("", null),
        count: Joi.number().allow("", null)
    })
}

const deleteClock = {
    params: Joi.object().keys({
        clock_id: Joi.required()
    })
}

const getOneClock = {
    params: Joi.object().keys({
        clock_id: Joi.required()
    })
}

module.exports = {
    createClock,
    updateClock,
    getOneClock,
    deleteClock
}