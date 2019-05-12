"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
  product_id: String,
  product_name: String
});
module.exports = mongoose.model("Products", productSchema);