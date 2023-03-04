'use strict';

var response = require('./res');
var connection = require('./koneksi');
const { connect } = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi REST API Book Berjalan", res);
};

// Menampilkan Semua Data Buku
exports.tampilData = function(req, res){
  connection.query('SELECT * FROM `tb_buku`', function(error, rows, fields){
    if (error) {
        console.log(error);
    } else{
        response.ok(rows, res);
    }
  });  
};

// Menampilkan Data Buku Berdasarkan ID
exports.tampilDataByID = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM `tb_buku` WHERE `id` = ?', [id] ,function(error, rows, fields){
        if (error) {
            console.log(error);
        } else{
            response.ok(rows, res);
        }
    });
};

exports.tambahData = function(req, res){
    var judul = req.body.judul;
    var pengarang = req.body.pengarang;
    var penerbit = req.body.penerbit;
    var tahun_terbit = req.body.tahun_terbit;

    connection.query('INSERT INTO `tb_buku`(`judul`, `pengarang`, `penerbit`, `tahun_terbit`) VALUES (?,?,?,?)', [judul, pengarang, penerbit, tahun_terbit], function(error, rows, fields){
        if (error) {
            console.log(error);
        } else {
            response.ok('Data Berhasil Ditambahkan!', res);
        }
    });
};