const Article = require("../models/Article");


// CREATE ARTICLE
exports.createArticle = async (req, res, next) => {
    try {
        const article = await Article.create({
            ...req.body,
            userId: req.user.id
        });

        res.status(201).json({
            message: "Article created successfully",
            article
        });

    } catch (error) {
        next(error);
    }
};


// GET ALL ARTICLES
exports.getArticles = async (req, res, next) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 5;

        const skip = (page - 1) * limit;

        const articles = await Article.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);


        const totalArticles = await Article.countDocuments();


        res.status(200).json({
            currentPage: page,
            itemsPerPage: limit,
            totalArticles,
            totalPages: Math.ceil(totalArticles / limit),
            results: articles.length,
            articles
        });

    } catch (error) {
        next(error);
    }
};


// GET SINGLE ARTICLE
exports.getArticleById = async (req, res, next) => {
    try {

        const article = await Article.findById(req.params.id);

        if (!article) {
            const error = new Error("Article not found");
            error.statusCode = 404;
            throw error;
        }


        res.status(200).json({
            article
        });


    } catch (error) {
        next(error);
    }
};


// UPDATE ARTICLE
exports.updateArticle = async (req, res, next) => {
    try {

        const article = await Article.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );


        if (!article) {
            const error = new Error("Article not found");
            error.statusCode = 404;
            throw error;
        }


        res.status(200).json({
            message: "Article updated successfully",
            article
        });


    } catch (error) {
        next(error);
    }
};



// DELETE ARTICLE
exports.deleteArticle = async (req, res, next) => {
    try {

        const article = await Article.findByIdAndDelete(
            req.params.id
        );


        if (!article) {
            const error = new Error("Article not found");
            error.statusCode = 404;
            throw error;
        }


        res.status(200).json({
            message: "Article deleted successfully"
        });


    } catch (error) {
        next(error);
    }
};