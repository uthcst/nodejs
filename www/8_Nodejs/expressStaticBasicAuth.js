//from https://gist.github.com/eshwaryaddanapudi/a9d385557b1b9320f5cb

var express = require('express');  
var app = express();
app.use(express.static("./www"));  
/* app.get('/', (req, res) => {
   res.send('Hello World!')
 app.post('/', (req, res) => {
   res.send('post request received')
 })
 app.get('/about', (req, res) => {
  res.send('about')
})
 */

app.get('/api/test',function(req,res){
	if(req.headers.authorization === undefined){
		res.status(401).send('Please provide WWW-Authorization using basic in headers with base 64 encoding');
	}
	else
	{
		//grab the encoded value
		var encoded = req.headers.authorization.split(' ')[1];
		// decode it using base64
		var decoded = new Buffer(encoded,'base64').toString();
		var name = decoded.split(':')[0];
		var password = decoded.split(':')[1];
		// check if the passed username and password match with the values in our database.
		// this is dummy validation. 
		if(name === password){
		var namesObj = [{
		name: 'Eshwar',place: 'Hyderabad'},{name: 'Prasad',place: 'New York'},{name: 'Yaddanapudi',place: 'San Francisco'}];
		res.status(200).send(JSON.stringify(namesObj));		
		}
		else{
			res.status(403).send('Invalid authorization data provided. Please check username and pwd');
		}
	
	}
})
var server = app.listen(4000, function () {  
  var host = server.address().address  
  var port = server.address().port  
 console.log("Express static listening at port %s", port)  
})