const mebiToKibi = require('../src/03');

test('', ()=>{
    expect(mebiToKibi(1)).toBe(1024);
});