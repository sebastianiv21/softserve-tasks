// There are 2 ways to count lucky tickets:

// 1. Simple - if a six-digit number is printed on the ticket, and the sum of the first three digits is equal to the sum of the last three, then this ticket is considered lucky.

// 2. Complicated - if the sum of the even digits of the ticket is equal to the sum of the odd digits of the ticket, then the ticket is considered lucky.

// Determine programmatically which variant of counting lucky tickets will give them more in a given interval.

// Input parameters: context object with min and max fields (strings)

// Output: an object with information about the winning method and the number of lucky tickets for each calculation method.

//for (let j = 0; j <= 3; j++) Number(i.toString()[j]);
const luckyTickets = (obj) => {
  const simple = (i) => {
    return (
      i.toString().length == 6 &&
      Number(i.toString()[0]) +
        Number(i.toString()[1]) +
        Number(i.toString()[2]) ==
        Number(i.toString()[3]) +
          Number(i.toString()[4]) +
          Number(i.toString()[5])
    );
  };

  const complicated = (i) => {
    return [...i.toString()]
  };

  for (let i = Number(obj.min); i <= Number(obj.max); i++) {
    console.log(simple(i));
  }
};

//console.log(luckyTickets({ min: '123456', max: '123466' }));
luckyTickets({ min: '123320', max: '123325' });

export default luckyTickets;

// how to make an accumulator that adds one for each true value in js
// how to sum the first three digits of a string
// how to get the position of a digit in js?
