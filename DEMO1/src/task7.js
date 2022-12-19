const fibonacciSeries = (constraint) => {
  if (!constraint)
  return { status: 'failed', reason: 'Insert a constraint' };
  
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
        return {
          status: 'failed',
          reason: 'Input object must have min and max fields',
        };
      if (
        Object.values(constraint).some(
          (element) => typeof element !== 'number' || element < 0
        )
      )
        return {
          status: 'failed',
          reason: 'Min and max properties must be numbers greater than zero',
        };

      let i = 0;
      do {
        if (fib(i) >= constraint.min) series.push(fib(i));
        i++;
      } while (fib(i) <= constraint.max);
      break;
    case 'number':
      if (constraint <= 0) return { status: 'failed', reason: 'Length must be greater than zero' };

      let j = 0;
      do {
        if (fib(j).toString().length == constraint) series.push(fib(j));
        j++;
      } while (fib(j).toString().length <= constraint);
      break;
    default:
      return {
        status: 'failed',
        reason: 'Input must be a number or an object with min and max fields',
      };
  }

  return series;
};

module.exports = fibonacciSeries;
