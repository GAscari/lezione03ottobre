var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();

app.use(function(req, res, next) {
    console.log("Request IP: " + req.url);
    console.log("Request date: " + new Date());
    res.write("EHII");
    res.end();
});

app.listen(3000, function() {
    console.log("App started on port 3000");
});
/*var http = require('http');
var conta=0;
var server = http.createServer(function (request, response)
     {   conta+=1; 
         console.log('request starting...'+conta);    
         // respond    
         response.write('AYYY LMAO');    
         response.end();
    });

server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');*/