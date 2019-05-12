"use strict";
module.exports = function(app) {
  var product = require("../Controllers/product_controller");

  // Product Routes
  app.route("/addProduct").post(product.add_product);
};