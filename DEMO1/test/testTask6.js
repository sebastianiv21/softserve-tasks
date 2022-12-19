const assert = require('assert');
const numericSequence = require('../src/task6');

describe('Numeric Sequence', () => {
  it('should return a string with the numeric sequence 2,3,4,5,6', function () {
    assert.equal(numericSequence(5, 4), '2,3,4,5,6');
  });
  it('should return a string with the numeric sequence 3,4,5', function () {
    assert.equal(numericSequence(3, 7), '3,4,5');
  });
  it('should return an object with the reason \'Insert all the parameters\'', function () {
    assert.deepEqual(numericSequence(), { status: 'failed', reason: 'Insert all the parameters' });
  });
  it('should return an object with the reason \'Input fields must be numbers greater than zero\'', function () {
    assert.deepEqual(numericSequence(32, 'x'), { status: 'failed', reason: 'Input fields must be numbers greater than zero' });
  });
});