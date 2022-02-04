const resto = require('./ex_1_2')

test('properly calculate the remainder of the division between two numbers', () => {
    expect(resto(1, 9)).toBe(1);
})

test('properly calculate the remainder of the division between two numbers', () => {
    expect(resto(0, 5)).toBe(0);
})

test('properly calculate the remainder of the division between two numbers', () => {
    expect(resto(15, 4)).toBe(3);
})