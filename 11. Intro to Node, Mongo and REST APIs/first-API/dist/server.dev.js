"use strict";

var express = require("express");

var app = express();

var bodyparser = require("body-parser");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: false
}));
var ingredients = [{
  id: "udau48",
  text: "Bottle"
}, {
  id: "dgd7xda",
  text: "Bag"
}, {
  id: "dad77a",
  text: "Belt"
}, {
  id: "sdash7",
  text: "poker cards"
}]; // app.get("/", function (request, response) {
//   response.send("My First API !");
// });

app.get("/funions", function (request, response) {
  response.send("Give me some funions foo!!!");
});
app.get("/ingredients", function (request, response) {
  response.send(ingredients);
});
app.post("/ingredients", function (request, response) {
  var ingredient = request.body;

  if (!ingredient || ingredient.text === "") {
    response.status(500).send({
      error: "Your ingredient Must Have some text!!!"
    });
  } else {
    ingredients.push(ingredient);
    response.status(200).send(ingredients);
  }
});
app.put("/ingredients/:ingredientId", function (request, response) {
  //var ingredientId = request.params.ingredientId;
  var newText = request.body.text;

  if (!newText || newText === "") {
    response.status(500).send({
      error: "You must provide ingredient text!!!"
    });
  } else {
    for (var x = 0; x < ingredients.length; x++) {
      var ing = ingredients[x];

      if (ing.id === request.params.ingredientId) {
        ingredients[x].text = newText;
        break;
      }
    }

    response.send(ingredients);
  }
});
app.listen(3000, function () {
  console.log("Running at port 3000...");
});