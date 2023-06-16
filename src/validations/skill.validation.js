const Joi = require('joi');
// const { objectId } = require('./custom.validation');

const getOneskill = {
  params: Joi.object().keys({
    skill_id: Joi.required()
  }),
};

const createskill = {
  body: Joi.object().keys({
    skill_name: Joi.string().required(),
    status: Joi.number(),
  }),
};

  const updateskill = {
    params: Joi.object().keys({
      skill_id: Joi.required(),
    }),
    body: Joi.object()
      .keys({
   skill_name: Joi.string().required(),
   status: Joi.number(),
      })
      .min(1),
  };

module.exports = {
  createskill,
  getOneskill,
  updateskill
};
