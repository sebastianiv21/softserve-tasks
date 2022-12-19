const assert = require('assert');
const sortTriangles = require('../src/task3');

describe('SortTriangles', () => {
  it("should return an array with the names of the triangles ordered by their area in descending order", function () {
    assert.deepEqual(
      sortTriangles([
        { vertices: 'ABC', a: 2, b: 2, c: 2 },
        { vertices: 'TED', t: 3, e: 4, d: 5 },
      ]),
      [ 'TED', 'ABC' ]
    );
  });
  it('should return an object with the reason \'Insert an array input\'', function () {
    assert.deepEqual(sortTriangles(), { status: 'failed', reason: 'Insert an array input' });
  });
  it('should return an object with the reason \'Input must be an array\'', function () {
    assert.deepEqual(sortTriangles('x'), { status: 'failed', reason: 'Input must be an array' });
  });
  it('should return an object with the reason \'Array\'s elements must be objects\'', function () {
    assert.deepEqual(sortTriangles(['x']), { status: 'failed', reason: 'Array\'s elements must be objects' });
  });
});
