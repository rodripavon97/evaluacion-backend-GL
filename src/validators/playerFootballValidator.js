const Joi = require("joi");

//Validator Body
const bodySchema = Joi.object({
  firstName: Joi.string().max(40).required(),
  lastName: Joi.string().max(30).required(),
  nationality: Joi.string().max(30).required(),
  dateOfBirth: Joi.date().required(),
  club: Joi.string().max(30).required(),
  codeFifa: Joi.number().required(),
});

//Validator Params
const paramsSchema = Joi.object().keys({
  id: Joi.string().required(),
});

// Validator Query
const querySchema = Joi.object({
  firstName: Joi.string().max(40),

  lastName: Joi.string().max(30),

  club: Joi.string().max(30),
});

module.exports = { bodySchema, paramsSchema, querySchema };
