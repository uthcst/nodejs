const http = require('http');
const fs = require('fs');
const port = 4000;

http.createServer(function (req, res) {
  fs.readFile("./www/home.html", function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(port);

console.log("Running at port " + port);