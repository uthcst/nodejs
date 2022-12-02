const express = require('express');
const app = express();
const port = 4000;
app.use(express.static(__dirname + "/www"));
//Serves requests starting with /pictures 
app.use('/pictures', express.static(__dirname + '/www/images'));
const server = app.listen(4000, function () {
  console.log("Server listening at port " + port);
})
