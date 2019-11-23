Unit Testing with Jest

Why unit test?
--saves time
--Creates reliable software
--Gives flexiblity to developers
  -Refactoring
  -Collaborating
  -Profiling
--Peace of mind

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

JEST:
"Jest uses "matchers" to let you test values in different ways." List of all matches available to the expect object: https://jestjs.io/docs/en/expect

TESTING ASYNC CODE (https://jestjs.io/docs/en/asynchronous)
Jest needs to know when a async function is finished before it can move onto another test.

1. Callbacks 

Example per docs:

test('the data is peanut butter', done => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    done();
  }

  fetchData(callback);
});

2. Promises 
"Return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail."

Exampled per docs:

test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

3. .resolves / .rejects

test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
  return expect(fetchData()).rejects.toMatch('error');
});

4. Async/Await
Probably the best way to test for async functions is by using async/await as the syntax is 'nicer'.

Below is an example of how to incorporate this method:

test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

Furthermore, you can use .resolves and .rejects with async/await:

test('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(fetchData()).rejects.toThrow('error');
});
