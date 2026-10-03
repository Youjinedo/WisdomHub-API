# WisdomHub API

## Project Description

WisdomHub API is a RESTful backend application built with Node.js, Express.js, and MongoDB Atlas.

The API provides user authentication and CRUD operations for managing articles. It also includes pagination, validation, environment variable configuration, and global error handling.

The project was restructured into an MVC-style architecture as part of the Week 12 backend development assignment.

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

## Project Structure

```text
WisdomHub-API
│
├── src
│   ├── config
│   │   ├── db.js
│   │   └── env.js
│   │
│   ├── controllers
│   │   ├── articleController.js
│   │   └── authController.js
│   │
│   ├── middlewares
│   │   ├── errorHandler.js
│   │   ├── requireAuth.js
│   │   └── validateArticle.js
│   │
│   ├── models
│   │   ├── Article.js
│   │   └── User.js
│   │
│   ├── routes
│   │   ├── articleRoutes.js
│   │   └── authRoutes.js
│   │
│   ├── services
│   ├── utils
│   │
│   └── validations
│       └── articleValidator.js
│
├── .env
├── .env.example
├── .gitignore
├── app.js
├── index.js
├── package.json
└── README.md