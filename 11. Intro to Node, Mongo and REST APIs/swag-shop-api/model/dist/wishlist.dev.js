"use strict";

var mongoose = require("mongoose");

var schema = mongoose.Schema;
var ObjectId = mongoose.Schema.types.ObjectId;
var WishList = new Schema({
  title: {
    type: String,
    "default": "Cool Wish List"
  },
  products: [{
    type: objectId,
    ref: "Product"
  }]
});
module.exports = mongoose.model("WishList", wishList);