"use strict";

const response = require("../utils/response");
const connection = require("../config/database");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API Book Berjalan", res);
};

// Menampilkan Semua Data Buku
exports.tampilData = function (req, res) {
  connection.query("SELECT * FROM `tb_buku`", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan Data Buku Berdasarkan ID
exports.tampilDataByID = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM `tb_buku` WHERE `id` = ?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

exports.tambahData = function (req, res) {
  const { judul, pengarang, penerbit, tahun_terbit } = req.body;

  connection.query(
    "INSERT INTO `tb_buku`(`judul`, `pengarang`, `penerbit`, `tahun_terbit`) VALUES (?,?,?,?)",
    [judul, pengarang, penerbit, tahun_terbit],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Data Berhasil Ditambahkan!", res);
      }
    }
  );
};

exports.ubahData = function (req, res) {
  const { id, judul, pengarang, penerbit, tahun_terbit } = req.body;

  connection.query(
    "UPDATE `tb_buku` SET `judul`=?,`pengarang`=?,`penerbit`=?,`tahun_terbit`=? WHERE `id`=?",
    [judul, pengarang, penerbit, tahun_terbit, id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Data Berhasil Diubahkan!", res);
      }
    }
  );
};

exports.deleteData = function (req, res) {
  const { id } = req.body;

  connection.query(
    "DELETE FROM `tb_buku` WHERE `id`=?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Data Berhasil Dihapuskan!", res);
      }
    }
  );
};
