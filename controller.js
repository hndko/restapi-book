'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi REST API Book Berjalan", res);
};

// Menampilkan Semua Data Dari Database
exports.tampilData = function(req, res){
  connection.query('SELECT * FROM `tb_buku`', function(error, rows, fields){
    if (error) {
        console.log(error);
    } else{
        response.ok(rows, res);
    }
  });  
};