const retornaParametro = require('./ex_0_1')

test('check if function returns exact string', () => {
    expect(retornaParametro('teste')).toBe('teste');
})

test('check if function returns same param array', () => {
    let param = [1, 2, 3];
    expect(retornaParametro(param)).toBe(param);
})