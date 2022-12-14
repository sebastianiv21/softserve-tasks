const assert = require('assert');
const chessBoard = require('../src/task1').default;
describe('chessBoard', function () {
    it('should return a string with an assigned character followed by a space multiple times', function () {
      assert.equal(chessBoard(3, 3, '*'), '* *\n * \n* *');
  });
});
