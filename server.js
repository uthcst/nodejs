import { createServer } from 'http';
import { myGreeting } from './myModule';
const PORT = 4000;

createServer(function (req, res) {
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(myGreeting());
  res.end();
}).listen(PORT);

console.log("Running at port " + PORT);