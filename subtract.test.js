const subtract = require('./subtract')

test('Subtract two items', () => {
    const minus = subtract(2, 2)

    expect(minus).toBe(0)
})