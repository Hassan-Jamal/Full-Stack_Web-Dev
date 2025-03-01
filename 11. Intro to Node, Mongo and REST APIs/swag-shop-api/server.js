var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var db = mongoose.connect("mongodb://localhost/swag-shop");

var Product = require("./model/product");
var WishList = require("./model/wishlist");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.post("/products", function (request, response) {
  var product = new product();
  product.title = product.body.title;
  product.price = product.body.price;
  product.save(function (err, savedProduct) {
    if (err) {
      response.status(500).send({ error: "Could not save the product" });
    } else {
      response.send(savedProduct);
    }
  });
});

app.listen(3000, function () {
  console.log("Swag API running on port 3000....");
});
