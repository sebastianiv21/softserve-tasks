const assert = require('assert');
const fibonacciSeries = require('../src/task6');

describe('Fibonacci series', () => {
  it('should return an array with a numeric sequence that passes a constraint', function () {
    assert.equal(
      fibonacciSeries({ min: 2, max: 50 }),
      [2, 3, 5, 8, 13, 21, 34]
    );
  });
  it('should return an array with a numeric sequence that passes a constraint', function () {
    assert.equal(fibonacciSeries(2), [13, 21, 34, 55, 89]);
  });
  it('should return an object with the reason why the function failed', function () {
    assert.deepEqual(fibonacciSeries(), {
      status: 'failed',
      reason: 'Insert a constraint',
    });
    assert.deepEqual(fibonacciSeries('a'), {
      status: 'failed',
      reason: 'Input must be a number or an object with min and max fields',
    });
  });
});
