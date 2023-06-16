const Joi = require('joi')

const createEmployeeOrg = {
    body: Joi.object().keys({
        user_id: Joi.required(),
        organisation_id: Joi.required()
    })
}

const getOneEmployeeOrg = {
    param: Joi.object().keys({
        id: Joi.required()
    })
}

const updateEmployeeOrg = {
    param: Joi.object().keys({
        id: Joi.required()
    }),
    body: Joi.object().keys({
        organisation_id: Joi.required()
    })
}

const deleteEmployeeOrg = {
    param: Joi.object().keys({
        id: Joi.required()
    })
}

module.exports = {
    createEmployeeOrg,
    getOneEmployeeOrg,
    updateEmployeeOrg,
    deleteEmployeeOrg
}