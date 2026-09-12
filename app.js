const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const connectDB = require("./config/db");
const articleRoutes = require("./routes/articleRoutes");
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middleware/errorHandler");


connectDB();

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


// Article Routes
app.use("/articles", articleRoutes);
app.use("/auth", authRoutes);

// 404 Handler
app.use((req, res, next) => {
    const error = new Error("Route not found");
    error.statusCode = 404;
    next(error);
});


// Error Handler
app.use(errorHandler);


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`WisdomHub API running on port ${PORT}`);
});