const express = require('express');
const app = express();
const PORT = 3000;

// Excercise 1
app.listen(PORT, function () {
    console.log('Example app listening on port: ' + PORT);
  });

app.get('/', function (req, res) {
    res.send('Hello World!');
  });

app.get('/about', function (req, res) {
    res.send('About page');
  });

app.get('/contact', function (req, res) {
    res.send('Contact page');
  });

app.get('/contact', function (req, res) {
    res.send('Contact page');
  });

app.get('/services', function (req, res) {  
    res.send('Services page');
  });

// Excercise 2
app.use(express.static('public'));




