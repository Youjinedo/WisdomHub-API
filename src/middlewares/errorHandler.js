const multer = require("multer");


const errorHandler = (err, req, res, next) => {

    console.error(err.message);


    // ==================================================
    // MULTER ERRORS
    // ==================================================

    if (err instanceof multer.MulterError) {

        // File exceeds the 3MB limit
        if (err.code === "LIMIT_FILE_SIZE") {

            return res.status(413).json({
                message: "File too large. Maximum file size is 3MB."
            });

        }


        // More files supplied than allowed
        // or an unexpected form-data field was used
        if (err.code === "LIMIT_UNEXPECTED_FILE") {

            return res.status(400).json({
                message:
                    "Too many files uploaded or an unexpected field name was used. Use 'avatar' for one avatar or 'images' for up to 5 post images."
            });

        }


        // Any other Multer-related error
        return res.status(400).json({
            message: err.message
        });

    }


    // ==================================================
    // INVALID FILE TYPE
    // ==================================================

    if (
        err.message ===
        "Only JPG, JPEG, PNG and WEBP image files are allowed."
    ) {

        return res.status(400).json({
            message:
                "Only JPG, JPEG, PNG and WEBP image files are allowed."
        });

    }


    // ==================================================
    // GENERAL APPLICATION ERRORS
    // ==================================================

    const statusCode =
        err.statusCode ||
        err.status ||
        500;


    return res.status(statusCode).json({
        message: err.message || "Server Error"
    });

};


module.exports = errorHandler;