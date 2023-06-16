const Joi = require('joi')

const createTeamemployee = {
    body: Joi.object().keys({
        employee_id: Joi.number().required()
    })
}

const updateTeamemployee = {
    params: Joi.object().keys({
        team_id: Joi.required()
    }),
    body: Joi.object().keys({
        employee_id: Joi.number().required()

    })
}

const deleteTeamemployee = {
    params: Joi.object().keys({
        team_id: Joi.required()
    })
}

const getOneTeamemployee = {
    params: Joi.object().keys({
        team_id: Joi.required()
    })
}

module.exports = {
    createTeamemployee,
    updateTeamemployee,
    getOneTeamemployee,
    deleteTeamemployee
}