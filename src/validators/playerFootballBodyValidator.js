const Joi = require("joi");

const schema = Joi.object({
  firstName: Joi.string().max(40).required(),
  lastName: Joi.string().max(30).required(),
  nationality: Joi.string().max(30).required(),
  dateOfBirth: Joi.date().required(),
  club: Joi.string().max(30).required(),
  codeFifa: Joi.number().required(),
});
module.exports = schema;
