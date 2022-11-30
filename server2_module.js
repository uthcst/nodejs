var http = require('http');
var dt = require('./myModule');
const PORT = 4001;

http.createServer(function (req, res) {
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(dt.myGreeting());
  res.end();
}).listen(PORT);

console.log("Running at port " + PORT);