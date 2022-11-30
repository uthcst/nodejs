var express = require('express');  
var app = express();
app.get("/about", function (req, res) {
  res.send("About this wiki");
});
app.use(express.static("www"));  
/* app.get('/', (req, res) => {
   res.send('Hello World!')
 app.post('/', (req, res) => {
   res.send('post request received')
 })
 app.get('/about', (req, res) => {
  res.send('about')
})
 */


  var server = app.listen(4000, function () {  
  var host = server.address().address  
  var port = server.address().port  
 console.log("Express static listening at port %s", port)  
})
