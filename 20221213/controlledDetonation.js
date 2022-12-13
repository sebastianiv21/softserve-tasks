const safePositions = (mineField) => {
  const MINE = 'M';
  const TREE = 'T';
  const CHARGE = 'C';
  const GROUND = '.';

  const mines = [];
  const safePos = [];

  // Shallow copy
  // const finalField = [...mineField];

  // Deep copy
  const finalField = JSON.parse(JSON.stringify(mineField));

  const getPosOf = (item, field, posArr) => {
    field.map((row, x) => {
      let y = row.indexOf(item);
      while (y != -1) {
        posArr.push([x, y]);
        y = row.indexOf(item, y + 1);
      }
    });
  };

  getPosOf(MINE, mineField, mines);

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

  getPosOf(GROUND, finalField, safePos);

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
