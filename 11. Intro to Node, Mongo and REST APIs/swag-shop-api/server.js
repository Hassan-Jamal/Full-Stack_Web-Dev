var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var db = mongoose.connect("mongodb://localhost/swag-shop");

var Product = require("./model/product");
var WishList = require("./model/wishlist");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.listen(3000, function () {
  console.log("Swag API running on port 3000....");
});
