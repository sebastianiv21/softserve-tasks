const assert = require('assert');
const envelopes = require('../src/task2');

describe('Envelopes', () => {
    it('should return \'Envelope 1\' if envelope 1 has greater dimensions', function () {
        assert.equal(envelopes({ a: 3.6, b: 6 }, { c: 3.5, d: 5 }), 'Envelope 1');
    });
    it('should return \'Envelope 2\' if envelope 2 has greater dimensions', function () {
        assert.equal(envelopes({ a: 3.6, b: 6 }, { c: 4, d: 7 }), 'Envelope 2');
    });
      it('should return an object with the reason \'Envelope 2 must have c & d props\'', function () {
        assert.deepEqual(envelopes({ a: 3.6, b: 6 }, { c: 4, b: 7 }), { status: 'failed', reason: 'Envelope 2 must have c & d props' });
    });
      it('should return an object with the reason \'Envelope\'s dimensions must be greater than zero\'', function () {
        assert.deepEqual(envelopes({ a: 3.6, b: -6 }, { c: 4, d: 7 }), { status: 'failed', reason: 'Envelope\'s dimensions must be greater than zero' });
    });
})