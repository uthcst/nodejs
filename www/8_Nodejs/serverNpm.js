const http = require('http');
const uc = require('upper-case');
const port = 4000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello to upper case!"));
  res.end();
  }).listen(port);

console.log("Running at port " + port);