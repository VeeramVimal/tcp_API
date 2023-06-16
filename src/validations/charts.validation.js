const Joi = require('joi')

const createCharts = {
    body: Joi.object().keys({
        chart_name: Joi.string().required(),
        chart_value: Joi.number(),
        chart_percentage: Joi.string(),
        chart_vsdays: Joi.string(),
    })
}

const updateCharts = {
    params: Joi.object().keys({
        chart_id: Joi.required()
    }),
    body: Joi.object().keys({
        status: Joi.string().required().valid('pending', 'resolved')
    })
}

const deleteCharts = {
    params: Joi.object().keys({
        chart_id: Joi.required()
    })
}

const getOneCharts = {
    params: Joi.object().keys({
        chart_id: Joi.required()
    })
}

module.exports = {
    createCharts,
    updateCharts,
    getOneCharts,
    deleteCharts
}