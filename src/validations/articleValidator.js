const Joi = require("joi");

const articleSchema = Joi.object({
    title: Joi.string()
        .trim()
        .min(3)
        .required(),

    content: Joi.string()
        .trim()
        .min(5)
        .required()
});

module.exports = articleSchema;