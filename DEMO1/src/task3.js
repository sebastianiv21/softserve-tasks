const sortTriangles = (arr) => {
  if (!arr)
  throw { status: 'failed', reason: 'Insert an array input' };
  if (!Array.isArray(arr))
    throw { status: 'failed', reason: 'Input must be an array' };
  const isObject = (element) => typeof element === 'object' && !Array.isArray(element);
  if (!arr.every(isObject))
    throw { status: 'failed', reason: 'Array\'s elements must be objects' };
  if (!arr.every((element) => Object.values(element).length === 4))
    throw { status: 'failed', reason: 'Objects must have all the required properties' };

  const heron = (triangle) => {
    const values = Object.values(triangle);
    const name = values[0];
    const a = values[1];
    const b = values[2];
    const c = values[3];

    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);

    return [name, area];
  };

  const areaArr = arr.map((triangle) => {
    return heron(triangle);
  });

  const sortedArr = areaArr.sort((a, b) => b[1] - a[1]);

  const sortedNames = sortedArr.map((triangle) => triangle[0]);

  return sortedNames;
};

module.exports = sortTriangles;
