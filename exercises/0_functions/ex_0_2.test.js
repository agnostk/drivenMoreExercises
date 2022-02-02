const retornaBatata = require('./ex_0_2')

test('check if function returns exact string', () => {
    expect(retornaBatata('teste')).toBe('Batata!');
})

test('check if function returns exact string', () => {
    let param = [1, 2, 3];
    expect(retornaBatata(param)).toBe('Batata!');
})

test('check if function returns exact string', () => {
    expect(retornaBatata(3)).toBe('Batata!');
})