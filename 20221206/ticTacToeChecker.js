function gameChecker(board) {
    const mainDiagonal = board.map((row, index) => row[index]);
    const secondDiagonal = board.map((row, index) => row[row.length - 1 - index]);
    let columns = [];
    for(let i = 0; i < board.length; i++ ) {
        columns.push(board.map(row => row[i]));
    }
    const options =[...board, mainDiagonal, secondDiagonal, ...columns];
    //const gameStatus = options.includes([1,1,1]);
    const xWon = (option) => option == '1,1,1';
    const oWon = (option) => option == '2,2,2';
    const gameStatus = options.some(xWon) ? 1 : options.some(oWon) ? 2 : options.flat().includes(0) ? -1 : 0;
    return gameStatus
}

console.log(gameChecker([
    [1, 2, 1],
    [2, 1, 2],
    [2, 1, 2],
  ]));
