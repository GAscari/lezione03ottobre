var express = require("express");
var path = require("path");
var api_router = require("./routes/api_router")

var app = express();

var static_path = path.resolve(__dirname, "static");
app.use(express.static(static_path));
app.use("/api", api_router);
/*
app.get("/users/:userid", function(request, response, next) {
    var userid = parseInt(request.params.userid, 10);
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Welcome " + userid);
});
app.use(function(request, response) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("DaNg nOT foUnD m8 whAtCHa gOnNa dO");
});
*/
app.listen(3000);

/*var express = require("express");
var http = require("http");
var util= require("util");

var app = express();

app.use(function(request, response, next) {
    //console.log("In comes a " + request.method + " to " + request.url);
    //console.log(util.inspect(request, {showHidden: false, depth: null}));
   // console.log(util.inspect(request.query));
      var query = request.query;
    
      query.p=query.p+"test";
      console.log(query.p);
      console.log(query.p2);
      
      next();
});

app.use(function(request, response, next) {
    console.log("Secondo mid " + request.method + " to " + request.url);
    next();
});

app.use(function(request, response) {
    var query = request.query;
    //response.writeHead(200, { "Content-Type": "text/plain" });
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("Hello, world! <br>"+query.p);
    
});

http.createServer(app).listen(3000);*/
/*var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();

app.use(function(req, res, next) {
    console.log("Request IP: <" + req.url + ">");
    console.log("Request date: " + new Date());
    next();    
});

app.use(function(req, res, next) {
    res.write("EHII");
    res.end();
});

app.listen(3000, function() {
    console.log("App started on port 3000");
});*/
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