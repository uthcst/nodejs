const express = require('express');  
const app = express();
const port = 4000;  
app.get('/', function (req, res) {  
   res.send('Welcome to Express');  
})  
app.listen(port, function () {  
 console.log("Server listening at http://%s:%s", "localhost", port)  
})