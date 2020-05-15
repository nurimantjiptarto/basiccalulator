const mathOperations = require('./mathOperations');

class calculator {
    sum(a,b){
        return this.Result = mathOperations.sum(a,b);
    }
    divide(a,b) {
        return this.Result = mathOperations.quotient(a,b);
    }
    multiply(a,b) {
        return this.Result = mathOperations.product(a,b);
    }
    difference(a,b) {
        return this.Result = mathOperations.difference(a,b);
    }
}
module.exports = calculator;