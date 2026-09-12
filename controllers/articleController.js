const Article = require("../models/Article");


// CREATE ARTICLE
exports.createArticle = async (req, res) => {
    try {
const article = await Article.create({
    ...req.body,
    userId: req.user.id
});

        res.status(201).json(article);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};



// GET ALL ARTICLES WITH PAGINATION
exports.getArticles = async (req, res) => {
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

            totalArticles: totalArticles,

            totalPages: Math.ceil(totalArticles / limit),

            results: articles.length,

            articles: articles

        });


    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }
};


// GET SINGLE ARTICLE
exports.getArticleById = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);

        if (!article) {
            return res.status(404).json({
                message: "Article not found"
            });
        }

        res.status(200).json(article);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
// UPDATE ARTICLE
exports.updateArticle = async (req, res) => {
    try {

        const article = await Article.findById(req.params.id);

        if (!article) {
            return res.status(404).json({
                message: "Article not found"
            });
        }


        if (!article.userId || article.userId.toString() !== req.user.id) {
            return res.status(403).json({
                message: "You can only update your own articles"
            });
        }


        Object.assign(article, req.body);

        await article.save();


        res.status(200).json(article);


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

     


// DELETE ARTICLE
exports.deleteArticle = async (req, res) => {
    try {

        const article = await Article.findById(req.params.id);

        if (!article) {
            return res.status(404).json({
                message: "Article not found"
            });
        }


        if (!article.userId || article.userId.toString() !== req.user.id) {
    return res.status(403).json({
        message: "You can only delete your own articles"
    });
}


        await Article.findByIdAndDelete(req.params.id);


        res.status(200).json({
            message: "Article deleted successfully"
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
// BONUS: SEARCH ARTICLES BY KEYWORD
exports.searchArticles = async (req, res) => {
    try {

        const keyword = req.query.q;

        const articles = await Article.find({
            $or: [
                { headline: { $regex: keyword, $options: "i" }},
                { story: { $regex: keyword, $options: "i" }},
                { category: { $regex: keyword, $options: "i" }},
                { tags: { $regex: keyword, $options: "i" }}
            ]
        });

        res.status(200).json({
            count: articles.length,
            results: articles
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};