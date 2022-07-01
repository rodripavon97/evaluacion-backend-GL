const Joi = require('joi')
const schema =  Joi.object({
    firstName: Joi.string().max(40),
    
    lastName: Joi.string().max(30),
    
    club: Joi.string().max(30),

}

)

module.exports = schema