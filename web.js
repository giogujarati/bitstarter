
var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());
var buffer = new Buffer (256);

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(buffer.toString('utc 8',fs.readFileSync("index.html")));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
