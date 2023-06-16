const Joi = require('joi')

const createEducation = {
    body: Joi.object().keys({
        education_title: Joi.string().required(),
        education_school: Joi.string(),
        education_timeperiod: Joi.string(),
        education_description: Joi.string(),
    })
}

const updateEducation = {
    params: Joi.object().keys({
        education_id: Joi.required()
    }),
    body: Joi.object().keys({
        education_title: Joi.string().required(),
        education_school: Joi.string(),
        education_timeperiod: Joi.string(),
        education_description: Joi.string(),
    })
}

const deleteEducation = {
    params: Joi.object().keys({
        education_id: Joi.required()
    })
}

const getOneEducation = {
    params: Joi.object().keys({
        education_id: Joi.required()
    })
}

module.exports = {
    createEducation,
    updateEducation,
    getOneEducation,
    deleteEducation
}