const Joi = require('joi');
const getOneProject = {
  params: Joi.object().keys({
    project_id: Joi.required()
  }),
};

const createProject = {
  body: Joi.object().keys({
    project_name: Joi.string().required(),
    start_date: Joi.date().required(),
    deadline: Joi.date().required(),
    project_category: Joi.number(),
    department: Joi.number(),
    client_id: Joi.number().required(),
    project_summary: Joi.string(),
    add_file: Joi.string(),
    notes: Joi.string(),
    create_public_project: Joi.boolean(),
    employee_id: Joi.number().required(),
    currency: Joi.number(),
    project_budget: Joi.number(),
    estimated_hours: Joi.number(),
    module: Joi.number(),
    status: Joi.number().required()

  }),
};
const updateProject = {
  params: Joi.object().keys({
    project_id: Joi.required()
  }),
  body: Joi.object({
    project_name: Joi.string(),
    start_date: Joi.date(),
    deadline: Joi.date(),
    project_category: Joi.number(),
    department: Joi.number(),
    client_id: Joi.number(),
    project_summary: Joi.string(),
    add_file: Joi.string(),
    create_public_project: Joi.boolean(),
    employee_id: Joi.number().required(),
    currency: Joi.number(),
    project_budget: Joi.number(),
    estimated_hours: Joi.number(),
    module: Joi.number(),
    status: Joi.number()

  })
};

const deleteProject = {
  params: Joi.object().keys({
    project_id: Joi.required()
  }),
};



module.exports = {
  getOneProject,
  createProject,
  updateProject,
  deleteProject
};
