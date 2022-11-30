var http = require('http');
const PORT = 4000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello for Node JS');
}).listen(PORT);

console.log("Running at port " + PORT)