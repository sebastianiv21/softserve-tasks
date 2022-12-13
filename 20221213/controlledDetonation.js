const safePositions = (mineField) => {
  const MINE = 'M';
  const TREE = 'T';
  const CHARGE = 'C';
  const GROUND = '.';

  // Shallow copy
  // const finalField = [...mineField];

  // Deep copy
  const finalField = JSON.parse(JSON.stringify(mineField));

  const getPosOf = (item, field) => {
    const posArr = [];
    field.forEach((row, x) => {
      let y = -1;
      do {
        y = row.indexOf(item, y + 1);
        if (y != -1) posArr.push([x, y]);
      } while (y != -1);
    });

    return posArr;
  };

  const mines = getPosOf(MINE, mineField);

  mines.forEach(([x, y]) => {
    for (let i = x; i >= 0; i--) {
      if (finalField[i][y] === TREE) {
        break;
      } else if (finalField[i][y] === GROUND) {
        finalField[i][y] = CHARGE;
      }
    }
    for (let i = x; i < finalField[y].length; i++) {
      if (finalField[i][y] === TREE) {
        break;
      } else if (finalField[i][y] === GROUND) {
        finalField[i][y] = CHARGE;
      }
    }
    for (let i = y; i >= 0; i--) {
      if (finalField[x][i] === TREE) {
        break;
      } else if (finalField[x][i] === GROUND) {
        finalField[x][i] = CHARGE;
      }
    }
    for (let i = y; i < finalField.length; i++) {
      if (finalField[x][i] === TREE) {
        break;
      } else if (finalField[x][i] === GROUND) {
        finalField[x][i] = CHARGE;
      }
    }
  });

  safePos = getPosOf(GROUND, finalField);

  return safePos;
};

const mineField = [
  ['.', '.', '.', '.', 'M'],
  ['.', 'M', '.', 'T', '.'],
  ['.', '.', 'T', '.', '.'],
  ['.', '.', 'M', '.', 'T'],
  ['.', '.', '.', '.', '.'],
];

console.log(safePositions(mineField));
