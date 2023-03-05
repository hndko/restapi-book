var mysql = require("mysql");

// buat koneksi database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db_restapi",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Database Mysql Berhasil Terkoneksi");
});

module.exports = conn;
