
var fs = require('fs');
var express = require('express');
//var app = express.createServer(express.logger());
var app = express();
var buffer = new Buffer(fs.readFileSync('index.html'), 'utf-8');

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  //response.send(buffer.toString(fs.readFileSync("index.html"),'utf-8'));
   response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
