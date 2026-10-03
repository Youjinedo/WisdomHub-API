const express = require("express");

const router = express.Router();

const {
    createArticle,
    getArticles,
    getArticleById,
    updateArticle,
    deleteArticle
} = require("../controllers/articleController");

const requireAuth = require("../middlewares/requireAuth");
const validateArticle = require("../middlewares/validateArticle");


// Create article
router.post(
    "/",
    requireAuth,
    validateArticle,
    createArticle
);


// Get all articles
router.get(
    "/",
    getArticles
);


// Get single article
router.get(
    "/:id",
    getArticleById
);


// Update article
router.put(
    "/:id",
    requireAuth,
    validateArticle,
    updateArticle
);


// Delete article
router.delete(
    "/:id",
    requireAuth,
    deleteArticle
);


module.exports = router;