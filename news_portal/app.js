var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(request, response){
  response.render("home/index");
});

app.get("/add-news", function(request, response){
  response.render("admin/form_add_news");
});

app.get("/news", function(request, response){
  response.render("news/news");
});

app.listen(3000, function(){
  console.log("Express running");
});
