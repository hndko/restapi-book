const mysql = require("mysql2");

// Create database connection
const conn = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "db_restapi",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Database Mysql Berhasil Terkoneksi");
});

module.exports = conn;
