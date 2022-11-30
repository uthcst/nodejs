var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT = 4000;

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "./html" + q.pathname+".html";
  fs.readFile(filename, function(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(PORT);

console.log("Running at port " + PORT)