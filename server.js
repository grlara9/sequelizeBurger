var express = require("express")
var bodyParser = require("body-parser")

var PORT = process.env.PORT || 8080

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.listen(PORT, function(){
    console.log("We are using PORT" + PORT);
})