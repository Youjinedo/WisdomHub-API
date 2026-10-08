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
const upload = require("../middlewares/upload");


// ======================================================
// ARTICLE CRUD ROUTES
// ======================================================


// Create a new article
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


// Get a single article by ID
router.get(
    "/:id",
    getArticleById
);


// Update an article
router.put(
    "/:id",
    requireAuth,
    validateArticle,
    updateArticle
);


// Delete an article
router.delete(
    "/:id",
    requireAuth,
    deleteArticle
);


// ======================================================
// MEDIA UPLOAD ROUTES
// ======================================================


// Upload one avatar/profile image
// POST /api/articles/avatar
router.post(
    "/avatar",
    upload.single("avatar"),
    (req, res) => {

        if (!req.file) {
            return res.status(400).json({
                message: "Please upload an avatar image."
            });
        }

        return res.status(200).json({
            message: "Avatar uploaded successfully",
            file: {
                originalName: req.file.originalname,
                filename: req.file.filename,
                mimetype: req.file.mimetype,
                size: req.file.size,
                path: req.file.path
            }
        });
    }
);


// Upload up to five images for a post
// POST /api/articles/images
router.post(
    "/images",
    upload.array("images", 5),
    (req, res) => {

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({
                message: "Please upload at least one image."
            });
        }

        const uploadedImages = req.files.map((file) => ({
            originalName: file.originalname,
            filename: file.filename,
            mimetype: file.mimetype,
            size: file.size,
            path: file.path
        }));

        return res.status(200).json({
            message: "Post images uploaded successfully",
            totalImages: req.files.length,
            images: uploadedImages
        });
    }
);


module.exports = router;