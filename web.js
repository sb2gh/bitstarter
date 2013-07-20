var express = require('express');

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/bootstrap'));
app.get('/', function(request, response) {
  var fs = require('fs');
  var buf = new Buffer(fs.readFileSync('index.html'), 'utf-8');
  response.send(buf.toString());//'Hello World 2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
