const chessBoard = (height, width, char) => {
  if (!height || !width || !char)
    return { status: 'failed', reason: 'Insert all the parameters' };
  if (isNaN(height) || isNaN(width))
    return { status: 'failed', reason: 'Height and width must be numbers' };
  if (height < 0 || width < 0)
    return {
      status: 'failed',
      reason: 'Height and width must be greater than zero',
    };
  if (typeof char !== 'string')
    return {
      status: 'failed',
      reason: 'Character to display must be a string',
    };
  let board = '';
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      board += j % 2 == i % 2 ? char : ' ';
    }
    if (i !== height - 1) board += '\n';
  }
  return board;
};

module.exports = chessBoard;
