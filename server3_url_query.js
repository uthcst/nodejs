var http = require('http');
var url = require('url');
const PORT = 4000;

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(PORT);

console.log("Running at port " + PORT);
console.log("test with url http://localhost:4000/?year=2022&month=October")