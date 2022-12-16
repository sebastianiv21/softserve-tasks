const assert = require('assert');
const luckyTickets = require('../src/task5');

describe('LuckyTickets', () => {
  it('should return an object with the winning method and the quantity of lucky tickets from each method', function () {
    assert.deepEqual(luckyTickets({ min: '000000', max: '001431' }), {
      winningMethod: 'Complicated',
      simpleTickets: 4,
      complicatedTickets: 56,
    });
  });
  it('should return an object with the reason why the function failed', function () {
    assert.deepEqual(luckyTickets(), { status: 'failed', reason: 'Insert an object input' });
    assert.deepEqual(luckyTickets('a'), { status: 'failed', reason: 'Input must be an object' });
  });
});
