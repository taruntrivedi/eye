var express = require("express"),
    methodOverride = require("method-override"),
    bodyParser = require("body-parser");
var app = express();
var path = require('path');


app.set("view engine", "ejs");
// app.use(express.static('public'))
app.use(express.static(__dirname +"/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

var indexRoutes = require("./routes/index");
app.use(indexRoutes);




app.listen(process.env.PORT||3000, process.env.IP, function(){
         console.log("eyes are watching");
});