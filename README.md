# Node.js REST API – Auth & User Management

This is a simple and secure Node.js REST API built with Express.js. It supports user authentication and management using JSON Web Tokens (JWT), environment variables, and PostgreSQL. Passwords are securely encrypted using `bcrypt`.

## Features

- **User registration & login**
- **JWT-based authentication**
- **PostgreSQL database connection**
- **Environment-based configuration**
- **Secure password hashing**
- **Modular routers: `auth` and `users`**

---

## 📁 Project Structure
```bash
project/
│
├── routes/
│ ├── auth.js # Handles login & registration
│ └── users.js # User-related actions (e.g. get profile)
│
├── postgres_connect.js # Database connection file
├── .env # Environment variables (e.g. DB, JWT_SECRET)
├── server.js # Main server file
└── package.json
```

---

## ⚙️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/Prog-yassine/auth-api-with-postgresql-and-nodejs.git
cd auth-api-with-postgresql-and-nodejs
```

2. ## ⚙️ Install dependencies
```bash
npm install
```

3. ## Set up .env file
```bash
JWT_SECRET=5173D32B1A2DD4711DE488EAA9F3F
JWT_EXPIRES_IN=30d

POSTGRES_HOST=study-buddy.cj4skagso5p4.eu-north-1.rds.amazonaws.com
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=Yassine1230AB
POSTGRES_DB=study_buddy
```

4. ## Run the server
```bash
npm start
```

---

## 🛠️ PostgreSQL Table Setup
Create the following users table in your PostgreSQL database. It uses a UUID as the primary key and automatically generates it:
```bash
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔐 API Routes
1. **POST /api/auth/register**
   Request Body:
   ```bash
    "username": "john_doe",
    "email": "john@example.com",
    "password": "securepassword"
    ``
2. **POST /api/auth/login**
   Request Body:
   ```bash
    "email": "john@example.com",
    "password": "securepassword"
   ```
   





