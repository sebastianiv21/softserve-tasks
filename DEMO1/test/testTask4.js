const assert = require('assert');
const palindrome = require('../src/task4');

describe('Palindrome', () => {
  it("should return 3443 if that number is a palindrome", function () {
    assert.equal(
      palindrome(3443), 3443)});
  it("should return the palindromic number 5665", function () {
    assert.equal(
      palindrome(276566589), 5665)});
  it('should return an object with the reason \'Insert a number input\'', function () {
    assert.deepEqual(palindrome(), { status: 'failed', reason: 'Insert a number input' });
  });
  it('should return an object with the reason \'Input must be greater than 10\'', function () {
    assert.deepEqual(palindrome(7), { status: 'failed', reason: 'Input must be greater than 10' });
  });
});
