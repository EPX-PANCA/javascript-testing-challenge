const repeatString = require('../src/06');
test('', () => {
    expect(repeatString('halo ', 3)).toBe('halo halo halo ')
});