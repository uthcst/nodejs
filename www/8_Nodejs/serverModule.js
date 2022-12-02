var http = require('http');
var dt = require('./myModule');
const port = 4000;

http.createServer(function (req, res) {
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(dt.myGreeting());
  res.end();
}).listen(port);

console.log("Running at port " + port);