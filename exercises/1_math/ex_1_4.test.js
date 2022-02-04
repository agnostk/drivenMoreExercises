const media = require('./ex_1_4')

test('properly calculate the average between two numbers', () => {
    expect(media(1, 9)).toBe(0.5 * (1 + 9));
})

test('properly calculate the average between two numbers', () => {
    expect(media(0, 5)).toBe(0.5 * (0 + 5));
})

test('properly calculate the average between two numbers', () => {
    expect(media(15, 4)).toBe(0.5 * (15 + 4));
})