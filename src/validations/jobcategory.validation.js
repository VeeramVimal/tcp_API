const Joi = require('joi');
// const { objectId } = require('./custom.validation');

const createcategory = {
  body: Joi.object().keys({
    category_name: Joi.string().required(),
    status: Joi.number(),
  }),
};

  const updateCategory = {
    params: Joi.object().keys({
      category_id: Joi.required(),
    }),
    body: Joi.object()
      .keys({
    category_name: Joi.string().required(),
    status: Joi.number(),
      })
      .min(1),
  };

module.exports = {
  createcategory,
  updateCategory
};
