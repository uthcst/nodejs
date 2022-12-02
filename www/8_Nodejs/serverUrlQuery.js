const http = require('http');
const url = require('url');
const PORT = 4000;

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  let q = url.parse(req.url, true).query;
  let txt = q.year + " " + q.month;
  res.end(txt);
}).listen(port);

console.log("Running at port " + port);
console.log("test with url http://localhost:4000/?year=2022&month=October")