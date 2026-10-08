const express = require("express");

const router = express.Router();

const {
    signup,
    login
} = require("../controllers/authController");


// SIGN UP
// POST /api/auth/signup
router.post(
    "/signup",
    signup
);


// LOGIN
// POST /api/auth/login
router.post(
    "/login",
    login
);


module.exports = router;