function pascal(depth = 1) {
    if (depth === 1) return [[1]];
    let pascalArr = [];
    for (let row = 1; row <= depth; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((pascalArr[row-2][col-1] + pascalArr[row-2][col]));
            }
        }
        pascalArr.push(arr);
    }
    return pascalArr;
  }

console.log(pascal(5));