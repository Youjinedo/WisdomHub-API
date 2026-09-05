const express = require("express");
const router = express.Router();

const {
    createArticle,
    getArticles,
    getArticleById,
    updateArticle,
    deleteArticle,
    searchArticles
} = require("../controllers/articleController");

const validateArticle = require("../middleware/validateArticle");
// CREATE ARTICLE
router.post("/", createArticle);

// GET ALL ARTICLES
router.get("/", getArticles);

// BONUS SEARCH ROUTE (must come before /:id)
router.get("/search", searchArticles);

// GET SINGLE ARTICLE
router.get("/:id", getArticleById);

// UPDATE ARTICLE
router.put("/:id", validateArticle, updateArticle);

// DELETE ARTICLE
router.delete("/:id", deleteArticle);


module.exports = router;