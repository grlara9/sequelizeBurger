var express = require("express")
var bodyParser = require("body-parser")
var exphbs = require('express-handlebars');
var methodOverride = require('method-override')
var db = require("./models");
var PORT = process.env.PORT || 8080

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(methodOverride("_method"));

app.use(methodOverride('_method'))
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



//burger routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes)

db.sequelize.sync().then(function() { 
app.listen(PORT, function(){
    console.log("We are using PORT" + PORT);
})
})