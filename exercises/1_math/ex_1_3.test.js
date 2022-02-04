const divide = require('./ex_1_3')

test('properly calculate the division between two numbers', () => {
    expect(divide(1, 9)).toBe(1 / 9);
})

test('properly calculate the division between two numbers', () => {
    expect(divide(0, 5)).toBe(0 / 5);
})

test('properly calculate the division between two numbers', () => {
    expect(divide(15, 4)).toBe(15 / 4);
})