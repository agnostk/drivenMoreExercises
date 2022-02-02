const somaTodos = require('./ex_0_3')

test('properly adds three numbers', () => {
    expect(somaTodos(0, 0, 0)).toBe(0);
})

test('properly adds three numbers', () => {
    let param = [1, 2, 3];
    expect(somaTodos(1, 2, 3)).toBe(6);
})

test('properly adds three numbers', () => {
    expect(somaTodos(100, 100, 100)).toBe(300);
})