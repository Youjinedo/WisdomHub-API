# WisdomHub API

## Project Description

WisdomHub API is a backend application built with Node.js, Express.js and MongoDB Atlas.

The project allows users to register, login and manage articles.

This project was restructured for the Week 12 Backend Development Assignment using an MVC-style structure.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Joi Validation
- bcrypt
- dotenv
- CORS

## Main Features

- User registration
- User login
- JWT authentication
- Create articles
- View all articles
- View one article
- Update articles
- Delete articles
- Pagination
- Article validation
- Global error handling
- Environment variable validation
- MongoDB Atlas connection
- Render deployment

## Environment Variables

The application requires the following environment variables:

PORT

MONGODB_URI

JWT_SECRET

An `.env.example` file has been included in the project.

The application checks that the required environment variables are available before the server starts.

## API Endpoints

### Home Route

GET /

Local:

http://localhost:5000/

Live:

https://wisdomhub-api-1.onrender.com/

### Register User

POST /auth/signup

### Login User

POST /auth/login

### Create Article

POST /articles

This route requires a JWT Bearer Token.

### Get All Articles

GET /articles

Live:

https://wisdomhub-api-1.onrender.com/articles

### Get One Article

GET /articles/:id

### Update Article

PUT /articles/:id

This route requires a JWT Bearer Token.

### Delete Article

DELETE /articles/:id

This route requires a JWT Bearer Token.

## API Testing

The API was tested successfully using Postman.

The following were tested:

- User signup
- User login
- JWT token
- Create article
- Get all articles
- Get one article
- Update article
- Delete article

## Deployment

The API was successfully deployed on Render.

Render API:

https://wisdomhub-api-1.onrender.com

## GitHub Repository

https://github.com/Youjinedo/WisdomHub-API

## Week 12 Assignment

The following requirements were completed:

- Refactored the project into MVC structure
- Used environment variables
- Separated routes, controllers, models and middleware
- Added `.env.example`
- Added environment variable checking
- Added global error handling
- Updated README with API endpoints
- Pushed the project to GitHub
- Deployed the API to Render

## Submission Links

GitHub:

https://github.com/Youjinedo/WisdomHub-API

Render API:

https://wisdomhub-api-1.onrender.com