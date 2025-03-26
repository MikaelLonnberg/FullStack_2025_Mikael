var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  // Excercise 1
  const message = 'Hello from EJS!';
  // Excercise 2
  const items = [ 'item1', 'item2', 'item3' ];
  // Excercise 4
  const isLoggedIn = true;  
  // Excercise 5
  const users = [
    { name: 'Mikael', age: 29 },
    { name: 'Jane', age: 30 },
    { name: 'Kovis', age: 40 }
  ];


  res.render('pages/index', { message: message, items: items, isLoggedIn: isLoggedIn, users: users });
});

module.exports = router;
