const suma = require('./suma');

test('2 + 5 = 7', () => {
    expect(suma(2, 5)).toBe(7); // Aserción propia de jest
});

test('a + 5 = NaN', () => {
    expect(suma('a', 5)).toBe('NaN');
});