# Recipes App

## Project Description
The Recipes App is a full-stack CRUD application built with Node.js, Express.js, and MongoDB (via Mongoose) to manage recipes. It allows users to create, view, update, and delete recipes via a REST API. This project follows the MVC architecture and is thoroughly documented with Postman.

## Tech Stack
- Node.js: Server environment
- Express.js: Framework for handling routing
- MongoDB (Mongoose): Database for storing recipe data
- Postman: API testing and documentation
## Features
- Create Recipe: Add a new recipe with details such as name, ingredients, and instructions.
- Get All Recipes: Retrieve all stored recipes.
- Get Recipe by ID: Fetch details of a specific recipe using its ID.
- Update Recipe: Modify a recipe’s details.
- Delete Recipe: Remove a recipe by its ID.

## Folder Descriptions
- controllers: Handles logic for CRUD operations.
- models: Defines schema and model for recipes.
- routes: Manages API endpoint definitions.
- config: Contains database connection settings.
- server.js: Initializes the server.

## Prerequisites
Node.js and npm installed
MongoDB database instance (local or cloud-based, e.g., MongoDB Atlas)
Postman for testing API requests