const Joi = require("joi");

const articleSchema = Joi.object({

    headline: Joi.string()
        .min(5)
        .required(),

    story: Joi.string()
        .min(20)
        .required(),

    category: Joi.string()
        .required(),

    author: Joi.object({
        name: Joi.string().required(),
        profession: Joi.string().required()
    }).required(),

    tags: Joi.array()
        .items(Joi.string()),

    readingTime: Joi.number(),

    featured: Joi.boolean(),

    status: Joi.string()

});


module.exports = articleSchema;