"use strict";

var express = require("express");

var app = express();

var mongoose = require("mongoose");

var bodyparser = require("body-parser");

var db = mongoose.connect("mongodb://localhost/swag-shop");

var Product = require("./model/product");

var WishList = require("./model/wishlist");

var product = require("./model/product");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: false
}));
app.post("/products", function (request, response) {
  var product = new product();
  product.title = product.body.title;
  product.price = product.body.price;
  product.save(function (err, savedProduct) {
    if (err) {
      response.status(500).send({
        error: "Could not save the product"
      });
    } else {
      response.send(savedProduct);
    }
  });
});
app.get('/products', function (request, response) {
  product.find({}, function (err, products) {
    if (err) {
      response.status(500).send({
        error: "Could not fetch the product"
      });
    } else {
      response.send(products);
    }
  });
});
app.listen(3000, function () {
  console.log("Swag API running on port 3000....");
});