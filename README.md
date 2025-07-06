# 🛒 E-Commerce Product Catalog (MongoDB + MERN)

This is a basic **E-Commerce Product Catalog** built using the MERN stack:
- **MongoDB** – NoSQL database to store product details
- **Express.js** – Backend API server
- **React.js** – Frontend interface
- **Node.js** – Runtime environment for server-side JavaScript

---

## 📁 Folder Structure

```
Project 1/
├── backend/ # Express + MongoDB (API Server)
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── controllers/ # Route logic
│ ├── config/ # MongoDB config
│ ├── server.js # Main Express app
│ └── .env # Environment variables
│
└── frontend/ # React app
 ├── src/components/ # React components (Form & Product List)
 ├── src/App.jsx # Main app file
 └── src/index.js # Entry point
```

---

## 🚀 Features

- View product catalog from MongoDB
- Add new products using a frontend form
- Backend API built with Express
- MongoDB schema for flexible product and review structure

---

## ⚙️ Installation & Running

### 🐘 Backend Setup

1. Go to the backend folder:
   ```bash
   cd Project\ 2/backend
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend folder with your MongoDB connection string:
   ```plaintext
    MONGODB_URI=mongodb://localhost:27017/ecommerce
    PORT=5000
    ```
4. Start the backend server:
   ```bash
   node server.js
   ```
### 🌐 Backend Setup
1. Open a second terminal and go to the frontend folder:
   ```bash
   cd Project\ 2/frontend
   ```
2. Install dependencies:
   ```bash
    npm install
    ```
3. Start the React app:
   ```bash
   npm run dev
   ```
4. Open your browser and go to `http://localhost:5173` to view the app.

