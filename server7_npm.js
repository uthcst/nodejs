var http = require('http');
var uc = require('upper-case');
const PORT = 4000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello to upper case!"));
  res.end();
  }).listen(PORT);

console.log("Running at port " + PORT);