Unit Testing with Jest

Basic tutorial:

1. Create a function:

let sum = (a, b) => {
    return a + b
}

2. Create a test for the created function:

test('Should sum two arguments', () => {
    const num = sum(2, 2)

    expect(num).toBe(4)
})

The sum function will be passed the arguments we specified. And the results will be stored in the constant 'num'.
Then num will be checked aginst the toBe property which we passed a value of 4.

If they match, then the test is passed, otherwise it will fail.