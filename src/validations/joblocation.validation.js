const Joi = require('joi');
// const { objectId } = require('./custom.validation');

const createLocation = {
  body: Joi.object().keys({
    location_name: Joi.string().required(),
    status: Joi.number(),
  }),
};

  const updateLocation = {
    params: Joi.object().keys({
      location_id: Joi.required(),
    }),
    body: Joi.object()
      .keys({
   location_name: Joi.string().required(),
   status: Joi.number(),
      })
      .min(1),
  };

module.exports = {
  createLocation,
  updateLocation
};
