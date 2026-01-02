"use strict";

module.exports = function (app) {
  const bookController = require("../controllers/bookController");

  app.route("/").get(bookController.index);
  app.route("/show-book").get(bookController.tampilData);
  app.route("/show-book/:id").get(bookController.tampilDataByID);
  app.route("/create-book").post(bookController.tambahData);
  app.route("/edit-book").put(bookController.ubahData);
  app.route("/delete-book").delete(bookController.deleteData);
};
