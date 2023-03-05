"use strict";

module.exports = function (app) {
  var jsonbook = require("./controller");

  app.route("/").get(jsonbook.index);
  app.route("/show-book").get(jsonbook.tampilData);
  app.route("/show-book/:id").get(jsonbook.tampilDataByID);
  app.route("/create-book").post(jsonbook.tambahData);
  app.route("/edit-book").put(jsonbook.ubahData);
  app.route("/delete-book").delete(jsonbook.deleteData);
};
