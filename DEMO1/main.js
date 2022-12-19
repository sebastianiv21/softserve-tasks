const chessBoard = require('./src/task1');
const envelopes = require('./src/task2');
const sortTriangles = require('./src/task3');
const extractPalindrome = require('./src/task4');
const luckyTickets = require('./src/task5');
const numericSequence = require('./src/task6');
const fibonacciSeries = require('./src/task7');

// Uncomment line according to the task
try {
  // Task 1 - Input parameters: length, width, character to display.
  console.log(chessBoard(4, 5, '*'));

  // Task 2 - Input parameters: envelope1 and envelope2 objects.
  // console.log(envelopes({ a: 3.6, b: 6 }, { c: 3.5, d: 5 }));

  // Task 3 - Input parameters: array of triangle objects.
  // console.log(
  //   sortTriangles([
  //     { vertices: 'ABC', a: 2, b: 2, c: 2 },
  //     { vertices: 'TED', t: 3, e: 4, d: 5 },
  //   ])
  // );

  // Task 4 - Input parameters: number.
  //   console.log(extractPalindrome(3443));

  // Task 5 - Input parameters: context object with min and max fields (strings).
  // console.log(luckyTickets({ min: '000000', max: '999999' }));

  // Task 6 - Input parameters: length and value of the minimum square.
  // console.log(numericSequence(3, 7));

  // Task 7 - Input parameters: context object with min and max fields, or length field
  // console.log(fibonacciSeries({ min: 2, max: 50 }));
  // console.log(fibonacciSeries(4));
} catch (e) {
  console.error(e);
}
