const calculator = require('./mathOperations');
a = 1;
b = 2;

sum = calculator.sum(a,b);
product = calculator.multiply(a,b);
quotient = calculator.divide(a,b);

console.log("The sum is: " + sum);
console.log("The product is: " + product);
console.log("The quotient is: " + quotient);