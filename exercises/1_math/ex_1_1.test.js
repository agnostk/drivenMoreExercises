const multiplica = require('./ex_1_1')

test('properly multiplies three numbers', () => {
    expect(multiplica(1, 9, 2)).toBe(18);
})

test('properly multiplies three numbers', () => {
    expect(multiplica(0, 200, 4)).toBe(0);
})

test('properly multiplies three numbers', () => {
    expect(multiplica(-4, 5, 5)).toBe(-100);
})