const funcaoVazia = require('./ex_0_0')

test('check if function extists', () => {
    expect(funcaoVazia).toBeInstanceOf(Function);
})

test('check if functions returns nothing', () => {
    expect(funcaoVazia()).toBeUndefined();
})

test('check if function has no params', () => {
    expect(funcaoVazia.length).toBe(0);
})