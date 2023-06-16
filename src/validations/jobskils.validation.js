const Joi = require('joi');
// const { objectId } = require('./custom.validation');

const createSkils = {
  body: Joi.object().keys({
    skil_name: Joi.string().required(),
    Status: Joi.number(),
  }),
};

  const updateSkils = {
    params: Joi.object().keys({
     skil_id: Joi.required(),
    }),
    body: Joi.object()
      .keys({
   skil_name: Joi.string().required(),
    Status: Joi.number(),
      })
      .min(1),
  };

module.exports = {
  createSkils,
  updateSkils
};
