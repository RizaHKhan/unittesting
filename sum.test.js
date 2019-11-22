const sumFunc = require('./sum')

test('Should sum two variables', () => {
    let num = sumFunc(2, 2);
    expect(num).toBe(4)
})

