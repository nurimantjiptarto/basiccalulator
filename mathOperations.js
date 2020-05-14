const addition = require('sum');
const multiply = require('multiply');
const divide = require('division');
const difference = require('subtract');
const sqrt = require('sqrt');
const square = require('square');

class mathOperations {
    static sum(a = null, b = null) {
        if(Array.isArray(a)) {
            return addition.sum(a);
        } else {
            return addition.sum(a,b);
        }
    }
    static product(a,b) {
        return multiply(a,b);
    }
    static quotient(a,b) {
        return divide(a,b);
    }
    static difference(a,b) {
        return difference.difference(a,b);
    }
    static sqrt(a){
        return sqrt.sqrt(a);
    }
    static square(a,b){
        return square.square(a,b);
    }
}

module.exports = MathOperations;