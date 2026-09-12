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
const requireAuth = require("../middleware/requireAuth");
// CREATE ARTICLE
router.post("/", requireAuth, validateArticle, createArticle);

// GET ALL ARTICLES
router.get("/", requireAuth, getArticles);

// BONUS SEARCH ROUTE (must come before /:id)
router.get("/search", requireAuth, searchArticles);

// GET SINGLE ARTICLE
router.get("/:id", requireAuth, getArticleById);

// UPDATE ARTICLE
router.put("/:id", requireAuth, validateArticle, updateArticle);

// DELETE ARTICLE
router.delete("/:id", requireAuth, deleteArticle);


module.exports = router;