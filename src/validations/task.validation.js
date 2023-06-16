const Joi = require('joi');

const createTask = {
  body: Joi.object().keys({
        task_title: Joi.string().required(),
        task_category: Joi.string(),
        project_id: Joi.number().required(),
        start_date: Joi.date().required(),
        task_Repeat: Joi.boolean(),
        task_private: Joi.boolean().required(),
        task_Billable: Joi.boolean().required(),
        // task_Repeat: Joi.boolean(),
        task_withdue: Joi.alternatives().conditional('due_date', 
        { is: true, 
          then: Joi.number(), 
          otherwise: Joi.string()
        }),
        // due_date: Joi.any(),
        due_date: Joi.date().allow('', null),
        task_set_time: Joi.boolean(),
        task_department: Joi.boolean(),
        planned_hours: Joi.number(),
        actual_hours: Joi.number(),
        employee_id: Joi.string().allow('', null).required(),
        task_description: Joi.string(),
        label: Joi.string(),
        current_status: Joi.string().required(),
        milestones: Joi.string().allow('', null),
        add_file: Joi.string(),
        repeat_every: Joi.number().allow('', null),
        task_cycles: Joi.number().allow('', null),
        task: Joi.string().allow('', null),
        hours: Joi.number().allow('', null),
        mins: Joi.number().allow('', null),
        dependent_task: Joi.boolean(),
        task_priority: Joi.string().allow('', null),
        status: Joi.number(),
  }),
};

const getAllTask = {
    params: Joi.object().keys({
      task_id: Joi.number(),
    }),
  };

  const getOneTask = {
    params: Joi.object().keys({
        task_id: Joi.number(),
    }),
  };

  const updateTask = {
    params: Joi.object().keys({
      task_id: Joi.required(),
    }),
    body: Joi.object()
      .keys({
        task_title: Joi.string().required(),
        task_category: Joi.string(),
        project_id: Joi.number().required(),
        start_date: Joi.date().required(),
        task_Repeat: Joi.boolean(),
        task_private: Joi.boolean().required(),
        task_Billable: Joi.boolean().required(),
        task_withdue: Joi.boolean(),
        due_date: Joi.date().allow('', null),
        task_set_time: Joi.boolean(),
        task_department: Joi.boolean(),
        planned_hours: Joi.number(),
        actual_hours: Joi.number(),
        employee_id: Joi.string().allow('', null).required(),
        task_description: Joi.string(),
        label: Joi.string(),
        current_status: Joi.string().required(),
        milestones: Joi.string().allow('', null),
        add_file: Joi.string(),
        repeat_every: Joi.number().allow('', null),
        task_cycles: Joi.number().allow('', null),
        task: Joi.string().allow('', null),
        hours: Joi.number().allow('', null),
        mins: Joi.number().allow('', null),
        dependent_task: Joi.boolean(),
        task_priority: Joi.string().allow('', null),
        status: Joi.number(),
      })
      .min(1),
  };

  
  const deleteTask = {
    params: Joi.object().keys({
      task_id: Joi.number(),
    }),
  };
module.exports = {
  createTask,
  getAllTask,
  updateTask,
  getOneTask,
  deleteTask
};
