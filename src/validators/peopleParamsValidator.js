const Joi = require("joi");
const schema = Joi.object({
    id: Joi.string().alphanum().max(24).required(),
})
module.exports=schema