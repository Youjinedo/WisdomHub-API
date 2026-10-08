const express = require("express");
const cors = require("cors");

const app = express();


// ======================================================
// GENERAL MIDDLEWARE
// ======================================================

app.use(cors());

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true
    })
);


// ======================================================
// ROUTES
// ======================================================

const authRoutes = require("./routes/authRoutes");
const articleRoutes = require("./routes/articleRoutes");


// Authentication routes
app.use("/api/auth", authRoutes);


// Article and media routes
app.use("/api/articles", articleRoutes);


// ======================================================
// HOME ROUTE
// ======================================================

app.get("/", (req, res) => {

    return res.status(200).json({
        message: "Welcome to WisdomHub API"
    });

});


// ======================================================
// 404 HANDLER
// ======================================================

app.use((req, res, next) => {

    const error = new Error(
        `Route not found: ${req.method} ${req.originalUrl}`
    );

    error.statusCode = 404;

    next(error);

});


// ======================================================
// GLOBAL ERROR HANDLER
// ======================================================

const errorHandler = require("./middlewares/errorHandler");

app.use(errorHandler);


module.exports = app;