'use strict';

var response = require('./res');
var connection = require('./koneksi');

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