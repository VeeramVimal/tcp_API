const Joi = require('joi')

const createEmployee = {
    body: Joi.object().keys({
        employee_firstname: Joi.string().required(),
        employee_lastname: Joi.string().required(),
        employee_dob: Joi.date().required(),
        employee_gender: Joi.number(),
        employee_phone: Joi.number(),
        employee_avatar: Joi.string(),
        employee_address: Joi.string(),
        user_id: Joi.number(),
        employee_designation: Joi.number().required(),
        employee_qualification: Joi.string(),
        employee_skills: Joi.string().allow('', null),
        employee_status: Joi.number()
    })
}

const updateEmployee = {
    params: Joi.object().keys({
        user_id: Joi.required()
    }),
    body: Joi.object().keys({
        employee_firstname: Joi.string(),
        employee_lastname: Joi.string(),
        employee_dob: Joi.date(),
        employee_gender: Joi.number(),
        employee_phone: Joi.number().min(1000000000).max(9999999999),
        employee_avatar: Joi.string().allow('', null),
        employee_address: Joi.string(),
        employee_designation: Joi.number(),
        employee_qualification: Joi.number(),
        employee_skills: Joi.string(),
        employee_status: Joi.number(),
        employee_gender: Joi.string()
    })
}
const deleteEmployee = {
    params: Joi.object().keys({
        user_id: Joi.required()
    })
}

const getOneEmployee = {
    params: Joi.object().keys({
        user_id: Joi.required()
    })
}

module.exports = {
    createEmployee,
    updateEmployee,
    getOneEmployee,
    deleteEmployee
}