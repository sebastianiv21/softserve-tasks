// Print the triangles in descending order of their area.

// Input parameters: array of triangle objects

// Output: ordered array of triangle names

const sortTriangles = (arr) => {
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

const arr = [
  { vertices: 'ABC', a: 2, b: 2, c: 2 },
  { vertices: 'TED', t: 3, e: 4, d: 5 },
];

try {
  console.log(sortTriangles(arr));
} catch (e) {
  console.error(e);
}

export default sortTriangles;
