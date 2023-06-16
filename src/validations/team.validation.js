const Joi = require('joi')

const createTeam = {
    body: Joi.object().keys({
        team_name: Joi.string().allow('', null).required()
    })
}

const updateTeam = {
    params: Joi.object().keys({
        team_id: Joi.required()
    }),
    body: Joi.object().keys({
        team_name: Joi.string().allow('', null)

    })
}

const deleteTeam = {
    params: Joi.object().keys({
        team_id: Joi.required()
    })
}

const getOneTeam = {
    params: Joi.object().keys({
        team_id: Joi.required()
    })
}

module.exports = {
    createTeam,
    updateTeam,
    getOneTeam,
    deleteTeam
}