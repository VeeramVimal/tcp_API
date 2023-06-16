const Joi = require('joi')


const createFavJobs = {
    body: Joi.object().keys({
        job_id:Joi.required()
    })
}

const deleteFavJobs = {
    params: Joi.object().keys({
        job_id:Joi.required()
    })
}

module.exports = {
    createFavJobs,
    deleteFavJobs
}