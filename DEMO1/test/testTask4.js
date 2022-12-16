const assert = require('assert');
const palindrome = require('../src/task4');

describe('Palindrome', () => {
  it("should return a palindromic number", function () {
    assert.equal(
      palindrome(3443), 3443)});
  it('should return an object with the reason why the function failed', function () {
    assert.deepEqual(palindrome(), { status: 'failed', reason: 'Insert a number input' });
    assert.deepEqual(palindrome('a'), { status: 'failed', reason: 'Input\'s type must be number' });
  });
});
