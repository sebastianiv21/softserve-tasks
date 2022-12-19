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
  it('should return an object with the winning method and the quantity of lucky tickets from each method', function () {
    assert.deepEqual(luckyTickets({ min: '000000', max: '999999' }), {
      winningMethod: 'Simple',
      simpleTickets: 55252,
      complicatedTickets: 25080
    });
  });
  it('should return an object with the reason \'Insert an object input\'', function () {
    assert.deepEqual(luckyTickets(), { status: 'failed', reason: 'Insert an object input' });
  });
  it('should return an object with the reason \'Min and max must be strings of length 6\'', function () {
    assert.deepEqual(luckyTickets({min: 2, max:35}), { status: 'failed', reason: 'Min and max must be strings of length 6' });
  });
});
