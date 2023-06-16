const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createJobsList = {
  body: Joi.object().keys({
    job_name: Joi.string().required(),
    job_location: Joi.string().required(),
    job_field: Joi.string().allow('', null).required(),
    employment_type: Joi.string().allow('', null).required(),
    company_name: Joi.string().allow('', null).required(),
    company_website: Joi.string().required(),
    posted_date: Joi.date(),
    posted_by: Joi.number(),
    company_logo: Joi.string(),
    work_environment:Joi.string(),
    job_experiance: Joi.string(),
    job_worklevel: Joi.string(),
    salary: Joi.number(),
    industry: Joi.string(),
    job_skils: Joi.string(),
    job_responsabilities: Joi.string().allow("", null),
    job_requirement: Joi.string().allow("", null),
    job_description: Joi.string().allow("", null),
    status: Joi.number(),
  }),
};

const getAllJobslist = {
    query: Joi.object().keys({
      Job_name: Joi.string(),
    }),
  };

  const getOneJobsList = {
    params: Joi.object().keys({
        job_id: Joi.number(),
    }),
  };

  const updateJobslist = {
    params: Joi.object().keys({
      job_id: Joi.required(),
    }),
    body: Joi.object()
      .keys({
    job_name: Joi.string().required(),
    job_location: Joi.string().required(),
    job_field: Joi.string().allow('', null).required(),
    employment_type: Joi.string().allow('', null).required(),
    company_name: Joi.string().allow('', null).required(),
    company_website: Joi.string().required(),
    posted_date: Joi.date(),
    posted_by: Joi.number(),
    company_logo: Joi.string(),
    work_environment:Joi.string(),
    job_experiance: Joi.string(),
    job_worklevel: Joi.string(),
    salary: Joi.number(),
    industry: Joi.string(),
    job_skils: Joi.string(),
    job_responsabilities: Joi.string().allow("", null),
    job_requirement: Joi.string().allow("", null),
    job_description: Joi.string().allow("", null),
    status: Joi.number(),
      })
      .min(1),
  };

  
  const deleteJobslist = {
    params: Joi.object().keys({
      job_id: Joi.number(),
    }),
  };

  const filteredJobslists = {
    body: Joi.object().keys({
      job_worklevel: Joi.array().items(Joi.string().valid('Fresher','Entry level','Mid level','Senior level','Manager/Executive')),
      employment_type: Joi.array().items(Joi.string().valid('Full time','Part time','Remote','Internship','Contract','Training'))
    })
  }

module.exports = {
  createJobsList,
  getAllJobslist,
  deleteJobslist,
  updateJobslist,
  getOneJobsList,
  filteredJobslists
};
