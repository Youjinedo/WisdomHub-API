const express = require("express");
const cors = require("cors");

const articleRoutes = require("./src/routes/articleRoutes");
const authRoutes = require("./src/routes/authRoutes");
const errorHandler = require("./src/middlewares/errorHandler");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to WisdomHub API"
    });
});


// Routes
app.use("/articles", articleRoutes);
app.use("/auth", authRoutes);


// 404 Handler
app.use((req, res, next) => {
    const error = new Error("Route not found");
    error.statusCode = 404;
    next(error);
});


// Global Error Handler
app.use(errorHandler);


module.exports = app;