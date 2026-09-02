const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const articleRoutes = require("./routes/articleRoutes");

dotenv.config();

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


// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});


// Error Handler
app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        message: "Server error"
    });
});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`WisdomHub API running on port ${PORT}`);
});