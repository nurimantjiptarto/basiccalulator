const calculator = require('../calculator');

test('Calculator divide 2 by  2 to equal 1', () => {
    let calc = new calculator();
    expect(calc.divide(2, 2)).toBe(1);
    expect(calc.Result).toBe(1);

});
test('Calculator Add 2 by  2 to equal 4', () => {
    let calc = new calculator();
    expect(calc.sum(2, 2)).toBe(4);
    expect(calc.Result).toBe(4);

});
test('Calculator Multiply 2 by  2 has a result equal to 4', () => {
    let calc = new calculator();
    expect(calc.multiply(2, 2)).toBe(4);
    expect(calc.Result).toBe(4);

});

/*
test('Calculator add array of 1,2,3,4 and get result 10', () => {
    let calc = new calculator();
    let myArray = [1,2,3,4]
    expect(calc.sum(myArray)).toBe(10);
    expect(calc.Result).toBe(10);

}); */