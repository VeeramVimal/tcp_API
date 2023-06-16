const Joi = require('joi');
// const { objectId } = require('./custom.validation');

const createNoticeorg = {
  body: Joi.object().keys({
    employee_id: Joi.number(),
    client_id: Joi.number(),
    noticeboard_id: Joi.number().required(),
  }),
};
  const updateNoticeorg = {
    params: Joi.object().keys({
      id: Joi.required(),
    }),
    body: Joi.object()
      .keys({
        employee_id: Joi.number(),
        client_id: Joi.number(),
        noticeboard_id: Joi.number().required(), 
      })
      .min(1),
  };

module.exports = {
  createNoticeorg,
  updateNoticeorg
};
