const mediaPonderada = require('./ex_1_5')

test('properly calculate the weighted average of two numbers', () => {
    expect(mediaPonderada(1, 9, 4, 3)).toBe(((1 * 4) + (9 * 3)) / (4 + 3));
})

test('properly calculate the weighted average of two numbers', () => {
    expect(mediaPonderada(0, 5, 5, 1)).toBe(((0 * 5) + (5 * 1)) / (5 + 1));
})

test('properly calculate the weighted average of two numbers', () => {
    expect(mediaPonderada(15, 4, 2, 9)).toBe(((15 * 2) + (4 * 9)) / (2 + 9));
})