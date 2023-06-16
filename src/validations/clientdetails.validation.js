const Joi = require('joi');
// const { objectId } = require('./custom.validation');

const createClientdetails = {
  body: Joi.object().keys({
    client_name: Joi.string().required(),
    client_phone: Joi.string().allow('', null),
    client_address: Joi.string().allow('', null),
    client_country: Joi.string().allow('', null),
    client_websiteurl: Joi.string().allow('', null),
    contact_firstname: Joi.string().allow('', null),
    contact_middlename: Joi.string().allow('', null),
    contact_lastname: Joi.string().allow('', null),
    contact_email: Joi.string().required(),
    contact_phone: Joi.string().allow('', null),
    status: Joi.number().required()
  }),
};

const getOneClientdetails = {
    params: Joi.object().keys({
        client_id: Joi.required(),
    })
}

const deleteClientdetails = {
    params: Joi.object().keys({
        client_id: Joi.required(),
    })
}


const updateClientdetails = {
params: Joi.object().keys({
    client_id: Joi.required(),
}),
body: Joi.object()
    .keys({
    client_name: Joi.string().required(),
    client_phone: Joi.string().allow('', null),
    client_address: Joi.string().allow('', null),
    client_country: Joi.string().allow('', null),
    client_websiteurl: Joi.string().allow('', null),
    contact_firstname: Joi.string().allow('', null),
    contact_middlename: Joi.string().allow('', null),
    contact_lastname: Joi.string().allow('', null),
    contact_email: Joi.string().required(),
    contact_phone: Joi.string().allow('', null),
    status: Joi.number().required()
    })
    .min(1),
};

module.exports = {
    getOneClientdetails,
    createClientdetails,
    updateClientdetails,
    deleteClientdetails
};
