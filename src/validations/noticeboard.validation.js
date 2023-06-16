const Joi = require('joi');

const createNotice = {
  body: Joi.object().keys({
    to: Joi.string().required(),
    assigned_to: Joi.string().required(),
    notice_heading: Joi.string().required(), 
    department: Joi.string().required(),
    notice_details: Joi.string().required(),
  }),
};
  const updateNotice = {
    params: Joi.object().keys({
      noticeboard_id: Joi.required(),
    }),
    body: Joi.object()
      .keys({
        to: Joi.string().required(),

        assigned_to: Joi.string().required(),
        notice_heading: Joi.string().required(),
        department: Joi.string().required(),
        notice_details: Joi.string().required(),
      })
      .min(1),
  };

module.exports = {
  createNotice,
  updateNotice
};
