const Joi = require('joi');
// const { objectId } = require('./custom.validation');


const createApplicantdetails = {
  body: Joi.object().keys({
    applicant_name: Joi.string().required(),
    applicant_title: Joi.string(),
    applicant_location: Joi.string().required(),
    applicant_phone: Joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`}).required(),
    applicant_about: Joi.string().required(),
    applicant_cv: Joi.string().required(),
    applicant_skills: Joi.string(),
    applicant_image: Joi.string()
  }).min(1)
};


const updateApplicantdetails = {
  body: Joi.object().keys({
      applicant_name: Joi.string(),
      applicant_title: Joi.string(),
      applicant_location: Joi.string(),
      applicant_phone: Joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`}),
      applicant_about: Joi.string(),
      applicant_cv: Joi.string(),
      applicant_skills: Joi.string(),
      applicant_image: Joi.string()
    })
    .min(1),
};

module.exports = {
  createApplicantdetails,
  updateApplicantdetails
};
