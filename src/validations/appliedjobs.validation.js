const Joi = require('joi');
// const { objectId } = require('./custom.validation');


const createEmpAppliedjobs = {
  body: Joi.object().keys({
    job_id: Joi.required()
  }).min(1)
};


const updateAdminAppliedjobs = {
  params: Joi.object().keys({
    appliedjob_id: Joi.required()
  }),
  body: Joi.object().keys({
      job_id: Joi.required(),
      status: Joi.required()
    })
    .min(1)
};

const getOneAppliedjobs = {
  params: Joi.object().keys({
    job_id: Joi.required()
  })
}

const deleteEmpAppliedjobs = {
  query: Joi.object().keys({
    job_id: Joi.required(),
  })
}

const deleteEmpBulkAppliedjobs = {
  query: Joi.array().items(Joi.string())
}
const getAdminOneAppliedjobs ={
  body: Joi.object().keys({
    appliedjob_id: Joi.required()
  })
}

module.exports = {
  createEmpAppliedjobs,
  updateAdminAppliedjobs,
  deleteEmpAppliedjobs,
  deleteEmpBulkAppliedjobs,
  getOneAppliedjobs,
  getAdminOneAppliedjobs
};
