const multer = require("multer");
const path = require("path");
const fs = require("fs");


// Upload folder path
const uploadFolder = path.join(__dirname, "../../uploads");


// Create uploads folder automatically if it does not exist
if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder, {
        recursive: true
    });
}


// Multer storage configuration
const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, uploadFolder);
    },

    filename: (req, file, cb) => {

        const uniqueName =
            Date.now() +
            "-" +
            Math.round(Math.random() * 1E9) +
            path.extname(file.originalname).toLowerCase();

        cb(null, uniqueName);
    }

});


// Allow image files only
const fileFilter = (req, file, cb) => {

    const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp"
    ];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(
            new Error(
                "Only JPG, JPEG, PNG and WEBP image files are allowed."
            ),
            false
        );
    }
};


// Multer configuration
const upload = multer({

    storage: storage,

    limits: {
        fileSize: 3 * 1024 * 1024
    },

    fileFilter: fileFilter

});


module.exports = upload;