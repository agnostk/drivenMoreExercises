const soma = require('./ex_1_0')

test('properly adds two numbers', () => {
    expect(soma(1, 9)).toBe(10);
})

test('properly adds two numbers', () => {
    expect(soma(0, 0)).toBe(0);
})

test('properly adds two numbers', () => {
    expect(soma(-4, 5)).toBe(1);
})