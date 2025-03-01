var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var db = mongoose.connect();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.listen(3000, function () {
  console.log("Swag API running on port 3000....");
});
