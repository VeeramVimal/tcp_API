const Joi = require("joi");
const { password } = require("./custom.validation");

const register = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password)})
};

const registerEmployee = {
  body: Joi.object().keys({
    employee_firstname: Joi.string().required(),
    employee_lastname: Joi.string().required(),
    employee_dob: Joi.string(),
    employee_gender: Joi.string(),
    employee_email: Joi.string(),
    employee_phone: Joi.number().min(1000000000).max(9999999999).required(),
    employee_address: Joi.string(),
    employee_designation: Joi.number(),
    employee_qualification: Joi.string(),
    employee_skills: Joi.string().allow('', null),
    employee_status: Joi.number(),
    employee_avatar: Joi.string().allow('', null),
    dob: Joi.string(),
    gender: Joi.number(),
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password)  
  })
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const forgotPassword = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
  }),
};

const resetPassword = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
  body: Joi.object().keys({
    password: Joi.string().required().custom(password),
  }),
};

const verifyEmail = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
};

module.exports = {
  register,
  registerEmployee,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  verifyEmail,
};
