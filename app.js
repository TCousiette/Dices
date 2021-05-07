const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
  res.sendFile("dicee.html");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is ok");
  });
