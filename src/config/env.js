const dotenv = require("dotenv");

dotenv.config();

const requiredEnvVariables = [
    "MONGODB_URI",
    "JWT_SECRET",
    "PORT"
];

const missingEnvVariables = requiredEnvVariables.filter(
    (variable) => !process.env[variable]
);

if (missingEnvVariables.length > 0) {
    console.error(
        `Missing required environment variables: ${missingEnvVariables.join(", ")}`
    );

    process.exit(1);
}

console.log("Environment variables validated successfully");

module.exports = {
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT
};