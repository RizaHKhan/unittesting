const sum = require('./sum')

test('Should sum two variables', () => {
    let num = sum(2, 2);
    expect(num).toBe(4)
})

