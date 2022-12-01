var http = require('http');
var fs = require('fs');
const PORT = 4000;

http.createServer(function (req, res) {
  fs.readFile("./www/home.html", function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(PORT);

console.log("Running at port " + PORT);