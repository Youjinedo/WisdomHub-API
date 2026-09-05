const articleSchema = require("../validators/articleValidator");


const validateArticle = (req, res, next) => {

    const { error } = articleSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    next();

};


module.exports = validateArticle;