# BOOki

**BOOki** is a full authentication and CRUD application built on the MERN stack. This project implements user authentication and provides a robust interface for managing books in a library setting. It utilizes the [Vite](https://vite.dev) build tool for a smooth development experience.

## Features

- **Backend**: Built with Express & MongoDB
  - Routes for authentication, logout, registration, profile management, and book CRUD operations
  - JWT authentication stored in HTTP-only cookies
  - Protected routes and endpoints
  - Custom middleware for verifying JSON web tokens and storing them in cookies
  - Custom error handling middleware

- **Frontend**: Developed with React
  - User interfaces for registration, login, logout, profile viewing, updating user profiles, and managing books
  - Utilizes React Bootstrap for UI components
  - Notifications implemented with React Toastify

## Usage

### Prerequisites

1. **MongoDB**: Create a MongoDB database and obtain your `MongoDB URI` from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register).
2. **PayPal**: (If applicable) Create a PayPal account and obtain your `Client ID` from [PayPal Developer](https://developer.paypal.com/).

### Environment Variables

Rename the `.env.example` file to `.env` and add the following variables:
