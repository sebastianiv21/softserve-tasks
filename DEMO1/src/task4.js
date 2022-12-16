const palindrome = (num) => {
  if (!num)
  throw { status: 'failed', reason: 'Insert a number input' };
  if (typeof num !== 'number')
    throw { status: 'failed', reason: 'Input\'s type must be number' };
  if (num <= 10)
    throw { status: 'failed', reason: 'Input must be greater than ten' };

  const reversedNum = num.toString().split('').reverse().join('');
  if (num == reversedNum) return num;
  return 0;
};

module.exports = palindrome;

