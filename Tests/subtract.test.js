const subtract = require('../subtract');

test('subtract 5 - 4 to equal 1', () => {
    expect(subtract(5, 4)).toBe(1);
});