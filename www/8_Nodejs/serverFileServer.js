const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 4000;
http.createServer(function (req, res) {
  let q = url.parse(req.url, true);
  let filename = "./www" + q.pathname + ".html";
  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
}).listen(port);
console.log("Running at port " + port);