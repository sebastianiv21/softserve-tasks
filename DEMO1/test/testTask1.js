const assert = require('assert');
const chessBoard = require('../src/task1');

describe('chessBoard', () => {
  it('should return a 3x3 chess board with * as character to display', function () {
    assert.equal(chessBoard(3, 3, '*'), '* *\n * \n* *');
  });
  it('should return a 4x5 chess board with 0 as character to display', function () {
    assert.equal(chessBoard(4, 5, '0'), '0 0 0\n 0 0 \n0 0 0\n 0 0 ');
  });
  it("should return an object with the reason 'Insert all the parameters'", function () {
    assert.deepEqual(chessBoard('x'), {
      status: 'failed',
      reason: 'Insert all the parameters',
    });
  });
  it("should return an object with the reason 'Height and width must be numbers'", function () {
    assert.deepEqual(chessBoard('x', 5, 'r'), {
      status: 'failed',
      reason: 'Height and width must be numbers',
    });
  });
});
