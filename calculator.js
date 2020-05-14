const mathOperations = require('mathOperations');

class Calculator {
    Add(a = null, b = null) {
        if (Array.isArray(a)) {
            return this.Result = mathOperations.sum(a);

        } else {
            return this.Result = mathOperations.sum(a, b);
        }
    }
    Divide(a,b) {
        return this.Result = mathOperations.quotient(a,b);
    }
    Multiply(a,b) {
        return this.Result = mathOperations.product(a,b);
    }
    Difference(a,b) {
        return this.Result = mathOperations.difference(a,b);
    }
}
module.exports = Calculator;