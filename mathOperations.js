const sum = require('./sum');
const multiply = require('./multiply');
const divide = require('./division');
const subtract = require('./subtract');
const sqrt = require('./sqrt');
const square = require('./square');

class mathOperations {
    static sum(a, b) {
        return sum(a,b);
      }
    static product(a,b) {
        return multiply(a,b);
    }
    static quotient(a,b) {
        return divide(a,b);
    }
    static difference(a,b) {
        return subtract(a,b);
    }
    static sqrt(a){
        return sqrt(a);
    }
    static square(a,b){
        return square(a,b);
    }
}

module.exports = mathOperations;