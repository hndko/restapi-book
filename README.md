# 📚 REST API Book Management

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

> A robust and modular RESTful API built with Node.js and Express for managing a book inventory system efficiently.

---

## 🚀 Overview

This project is a backend application designed to demonstrate a clean and scalable architecture (MVC) for building REST APIs. It provides comprehensive endpoints for managing book records, including adding, updating, deleting, and retrieving book data.

It serves as a perfect starter kit or reference for:

- Learning **Node.js** & **Express**
- Understanding **MVC Architecture** in backend development
- Implementing **MySQL** interactions
- Structuring a production-ready API

## ✨ Key Features

- **CRUD Operations**: Full Create, Read, Update, Delete capabilities for book data.
- **Modular Architecture**: Codebase separated into Routes, Controllers, Config, and Utils for better maintainability.
- **Environment Configuration**: Secure management of credentials using `.env`.
- **Standardized Responses**: Consistent JSON response structure across all endpoints.
- **Postman Collection**: Ready-to-use API documentation for testing.

## 🛠️ Tech Stack

- **Runtime Environment**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MySQL](https://www.mysql.com/)
- **Dependencies**: `body-parser`, `dotenv`, `mysql`

## 📂 Project Structure

```text
restapi-book/
├── docs/               # Documentation assets
│   └── postman_collection.json
├── src/
│   ├── config/         # Database connection setup
│   ├── controllers/    # Business logic & request handling
│   ├── routes/         # API endpoint definitions
│   ├── utils/          # Helper functions (response formatting)
│   └── app.js          # Application entry point
├── .env                # Environment variables
└── package.json
```

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v14 or higher)
- MySQL Server installed and running

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/hndko/restapi-book.git
    cd restapi-book
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Configure Environment**

    - Copy the example environment file:
      ```bash
      cp .env.example .env
      ```
    - Open `.env` and fill in your MySQL credentials:
      ```env
      PORT=9000
      DB_HOST=localhost
      DB_USER=root
      DB_PASSWORD=root
      DB_NAME=db_restapi
      ```

4.  **Setup Database**

    - Create a database named `db_restapi`.
    - Create the `tb_buku` table with columns: `id`, `judul`, `pengarang`, `penerbit`, `tahun_terbit`.

5.  **Run the Server**
    ```bash
    npm start
    ```
    Server will start on `http://localhost:9000`.

## 📖 API Documentation

The full API documentation is available via a Postman Collection.

1.  **Open Postman**.
2.  **Import** the file located at `docs/postman_collection.json`.
3.  You will see all endpoints ready to test:
    - `GET /` - Check API Status
    - `GET /show-book` - Get all books
    - `GET /show-book/:id` - Get specific book
    - `POST /create-book` - Add a new book
    - `PUT /edit-book` - Update a book
    - `DELETE /delete-book` - Delete a book

## 👨‍💻 Author

**Handoko**

- GitHub: [@hndko](https://github.com/hndko)

---

_Made with ❤️ using Node.js_
