const Joi = require('joi');

const createTicket = {
  body: Joi.object().keys({
    ticket_subject: Joi.string().required(),
    ticket_description: Joi.string().allow('', null).required(),
    employee_id: Joi.number().required(),
    ticket_priority: Joi.string(),
    upload_file: Joi.string(),
    requested_on: Joi.date(),
    ticket_type: Joi.string(),
    ticket_tags: Joi.string().allow("" , null),
    status: Joi.number().required(),
  }),
};

const getAllTicket = {
  params: Joi.object().keys({
    ticket_id: Joi.number(),
  }),
};

const getOneTicket = {
  params: Joi.object().keys({
    ticket_id: Joi.required()
  })
}
const updateTicket = {
  params: Joi.object().keys({
    ticket_id: Joi.required()
  }),
  body: Joi.object().keys({
    status: Joi.string().required().valid('pending', 'resolved')
  })
}

const deleteTicket = {
  params: Joi.object().keys({
    ticket_id: Joi.number(),
  }),
};
module.exports = {
  createTicket,
  getAllTicket,
  updateTicket,
  getOneTicket,
  deleteTicket
};
