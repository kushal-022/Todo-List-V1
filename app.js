//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// console.log(date());

var items = ["Buy food", "Cook food", "Eat food"];
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function(req, res){

  let day = date.getDate();

  res.render("list", {kindOfDay: day, newListItem: items});

});


app.post("/", function(req, res) {
  var item = req.body.nextItem ;
  items.push(item);

  res.redirect("/");

});

app.get("/about", function(req, res) {
  res.render("about");
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
