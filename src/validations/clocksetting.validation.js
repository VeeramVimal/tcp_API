const Joi = require("joi");

const createClockSetting = {
    body: Joi.object().keys({
        user_id: Joi.number().required(),
        added_date: Joi.string().allow("", null),
        updated_date: Joi.string().allow("", null),
        counts: Joi.string().allow("", null)
    })
}

const deleteClockSetting = {
    params: Joi.object().keys({
        setting_id: Joi.required()
    })
}

const getOneClockSetting = {
    params: Joi.object().keys({
        setting_id: Joi.required()
    })
}

module.exports = {
    createClockSetting,
    getOneClockSetting,
    deleteClockSetting
}