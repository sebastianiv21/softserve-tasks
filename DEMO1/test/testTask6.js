const assert = require('assert');
const numericSequence = require('../src/task6');

describe('Numeric Sequence', () => {
  it('should return a string with a numeric sequence that passes a constraint', function () {
    assert.deepEqual(numericSequence(5, 4), 2,3,4,5,6);
  });
  it('should return an object with the reason why the function failed', function () {
    assert.deepEqual(numericSequence(), { status: 'failed', reason: 'Insert an object input' });
    assert.deepEqual(numericSequence('a'), { status: 'failed', reason: 'Input must be an object' });
  });
});