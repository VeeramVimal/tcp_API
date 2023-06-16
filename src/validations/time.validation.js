const Joi = require('joi');

const createTime = {
  body: Joi.object().keys({
    project_name: Joi.string().required(),
    task_name: Joi.string().allow('', null).required(),
    start_Date: Joi.date().allow('', null).required(),
    start_Time: Joi.date().allow('', null).required(),
    end_Date: Joi.date().allow('', null).required(),
    end_Time: Joi.date().allow('', null).required(),
    memo: Joi.string().allow('', null).required(),
    total_Hours: Joi.string().allow('', null).required(),

  }),
};

const getAllTime = {
  params: Joi.object().keys({
    time_id: Joi.number(),
  }),
};

const getOneTime = {
  params: Joi.object().keys({
    time_id: Joi.number(),
  }),
};
const updateTime = {
  params: Joi.object().keys({
    time_id: Joi.required(),
  }),
  body: Joi.object()
    .keys({
      project_name: Joi.string().required(),
      task_name: Joi.string().allow('', null).required(),
      start_Date: Joi.date().allow('', null).required(),
      start_Time: Joi.string().allow('', null).required(),
      end_Date: Joi.date().allow('', null).required(),
      end_Time: Joi.string().allow('', null).required(),
      memo: Joi.string().allow('', null).required(),
      total_Hours: Joi.string().allow('', null).required(),
    })
    .min(1),
};


const deleteTime = {
  params: Joi.object().keys({
    time_id: Joi.number(),
  }),
};
module.exports = {
  createTime,
  getAllTime,
  updateTime,
  getOneTime,
  deleteTime
};
