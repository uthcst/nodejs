const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/www/index.html');
});
app.get('/addBookForm', function (req, res) {
    res.sendFile(__dirname + '/www/addBookForm.html');
});
app.post('/addBook', function (req, res) {
    let book = {
        author: req.body.author,
        title: req.body.title,
        year: req.body.year
    }
    res.send(book.title + ' Submitted Successfully!');
});
const server = app.listen(port, function () {
    console.log('Server is running at ', port);
});