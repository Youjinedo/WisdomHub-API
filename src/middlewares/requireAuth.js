const jwt = require("jsonwebtoken");


const requireAuth = (req, res, next) => {
    try {

        const authHeader = req.headers.authorization;


        // Check that an Authorization header exists
        if (!authHeader) {
            return res.status(401).json({
                message: "Authorization token required"
            });
        }


        // Authorization header must use:
        // Bearer YOUR_TOKEN
        const parts = authHeader.split(" ");


        if (
            parts.length !== 2 ||
            parts[0] !== "Bearer" ||
            !parts[1]
        ) {
            return res.status(401).json({
                message: "Invalid authorization format. Use Bearer token."
            });
        }


        const token = parts[1];


        // Verify JWT
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );


        // Make decoded user information available
        // to protected controllers
        req.user = decoded;


        next();


    } catch (error) {

        return res.status(401).json({
            message: "Invalid or expired authorization token"
        });

    }
};


module.exports = requireAuth;