const Joi = require("joi");
const schema = Joi.object({
    firstName: Joi.string().alphanum().min(3).max(30).trim(),
    lastName: Joi.string().alphanum().min(3).max(30),
    username: Joi.string(),
    password: Joi.string(),
    email: Joi.string().email(),
    address: Joi.string(),
    phone: Joi.number(),
  });
  module.exports=schema;