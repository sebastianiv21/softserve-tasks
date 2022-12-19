const assert = require('assert');
const fibonacciSeries = require('../src/task7');

describe('Fibonacci series', () => {
  it('should return an array with the numeric sequence [2, 3, 5, 8, 13, 21, 34]', function () {
    assert.deepEqual(
      fibonacciSeries({ min: 2, max: 50 }),
      [2, 3, 5, 8, 13, 21, 34]
    );
  });
  it('should return an array with the numeric sequence [13, 21, 34, 55, 89]', function () {
    assert.deepEqual(fibonacciSeries(2), [13, 21, 34, 55, 89]);
  });
  it('should return an array with the numeric sequence [1597, 2584, 4181, 6765]', function () {
    assert.deepEqual(fibonacciSeries(4), [1597, 2584, 4181, 6765]);
  });
  it('should return an object with the reason why the function failed', function () {
    assert.deepEqual(fibonacciSeries(), {
      status: 'failed',
      reason: 'Insert a constraint',
    });
  });
});
