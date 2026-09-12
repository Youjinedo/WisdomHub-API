Project Description

WisdomHub API is a RESTful backend application built with Node.js, Express.js, and MongoDB Atlas.

The API provides CRUD operations for managing articles, including authentication, pagination, keyword search, and secure user ownership control.

Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Joi Validation
- dotenv

How To Install

1. Clone the repository

2. Install dependencies

npm install

3. Create your .env file

4. Start the server

npm run dev

Features

- User registration and login authentication
- JWT protected routes
- Create, read, update and delete articles
- Users can only update their own articles
- Users can only delete their own articles
- Pagination and keyword search
- Global error handling