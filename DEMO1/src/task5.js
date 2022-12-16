const luckyTickets = (obj) => {
  if (!obj)
  throw { status: 'failed', reason: 'Insert an object input' };
  if (!(typeof obj === 'object' && !Array.isArray(obj)))
    throw { status: 'failed', reason: 'Input must be an object' };
  if (!(Object.keys(obj).includes('min') && Object.keys(obj).includes('max')))
    throw {
      status: 'failed',
      reason: 'Object must have min and max properties',
    };
    if (!Object.values(obj).every((element) => typeof element === 'string' && element.length === 6))
    throw { status: 'failed', reason: 'Min and max must be strings of length 6' };


  const simple = (i) => {
    return (
      i.toString().length == 7 &&
      Number(i.toString()[1]) +
        Number(i.toString()[2]) +
        Number(i.toString()[3]) ==
        Number(i.toString()[4]) +
          Number(i.toString()[5]) +
          Number(i.toString()[6])
    );
  };

  const complicated = (i) => {
    let odds = [];
    let evens = [];
    const arr = [...i.toString()];
    arr.shift();

    arr.forEach((n) =>
      Number(n) % 2 == 0 ? evens.push(Number(n)) : odds.push(Number(n))
    );

    const sumOdds =
      odds.length == 0 ? -1 : odds.reduce((acc, curr) => acc + curr);
    const sumEvens =
      evens.length == 0 ? -1 : evens.reduce((acc, curr) => acc + curr);

    return sumOdds == sumEvens;
  };

  const temp1 = [...obj.min];
  temp1.unshift(1);
  const min = Number(temp1.join(''));

  const temp2 = [...obj.max];
  temp2.unshift(1);
  const max = Number(temp2.join(''));

  let simpleTickets = 0;
  let complicatedTickets = 0;

  for (let i = min; i <= max; i++) {
    if (simple(i)) {
      simpleTickets++;
    }
    if (complicated(i)) {
      complicatedTickets++;
    }
  }

  const winningMethod =
    simpleTickets > complicatedTickets
      ? 'Simple'
      : simpleTickets < complicatedTickets
      ? 'Complicated'
      : 'Both';

  return {
    winningMethod,
    simpleTickets,
    complicatedTickets,
  };
};

module.exports = luckyTickets;
