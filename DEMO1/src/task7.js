const fibonacciSeries = (constraint) => {
  const fib = (n) => {
    if (n <= 1) return n;

    return fib(n - 1) + fib(n - 2);
  };

  const series = [];

  switch (typeof constraint) {
    case 'object':
      if (
        !(constraint.hasOwnProperty('min') && constraint.hasOwnProperty('max'))
      )
        throw {
          status: 'failed',
          reason: 'Input object must have min and max fields',
        };

      let i = 0;
      do {
        if (fib(i) >= constraint.min) series.push(fib(i));
        i++;
      } while (fib(i) <= constraint.max);
      break;
    case 'number':
      let j = 0;
      do {
        if (fib(j).toString().length == constraint) series.push(fib(j));
        j++;
      } while (fib(j).toString().length <= constraint);
      break;
    default:
      throw {
        status: 'failed',
        reason: 'Input must be a number or an object with min and max fields',
      };
  }

  return series;
};

try {
    console.log(fibonacciSeries({ min: 2, max: 50 }));
  // console.log(fibonacciSeries(2));
} catch (e) {
  console.error(e);
}

export default fibonacciSeries;
