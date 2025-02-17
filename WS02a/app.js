const msg="Hello Node.js!";
console.log(msg);

const math=require('./math');
const stringUtils=require('./stringUtils');
const dateUtils=require('./dateUtils');

console.log('Date: ', dateUtils.getCurrentDate()); 
console.log('Formatted Date: ', dateUtils.formatDate(dateUtils.getCurrentDate()));
console.log('Sum: ', math.add(1,2));
console.log('Subtract: ', math.subtract(1,2));
console.log('Reverse: ', stringUtils.reverse(msg));   
