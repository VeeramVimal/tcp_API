const Joi = require('joi')

const createAssets = {
    body: Joi.object().keys({
        assets_name: Joi.string(),
        assets_value: Joi.string(),
        assets_location: Joi.string(),
        assets_status: Joi.string().default(0).required(),
        assets_type: Joi.string().required(),
        assets_details: Joi.string(),
        assets_serialno: Joi.string().required(),
        assets_picture: Joi.string()
    })
}
const updateAssets = {
    params: Joi.object().keys({
        assets_id: Joi.required()
    }),
    body: Joi.object().keys({
        assets_location: Joi.string(),
        assets_type: Joi.string(),
        assets_details: Joi.string(),
        assets_picture: Joi.string(),
        assets_status:  Joi.string(),
    })
}

const deleteAssets = {
    params: Joi.object().keys({
        assets_id: Joi.required()
    })
}

const getOneAssets = {
    params: Joi.object().keys({
        assets_id: Joi.required()
    })
}

module.exports = {
    createAssets,
    updateAssets,
    getOneAssets,
    deleteAssets
}