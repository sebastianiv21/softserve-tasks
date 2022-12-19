const isPalindrome = (str) => {
  const reversedStr = str.split('').reverse().join('');
  return str == reversedStr;
};

const extractPalindrome = (num) => {
  if (!num) return { status: 'failed', reason: 'Insert a number input' };
  if (typeof num !== 'number')
    return { status: 'failed', reason: "Input's type must be number" };
  if (num <= 10)
    return { status: 'failed', reason: 'Input must be greater than 10' };

  let palLength = 0;
  let palNum = '';

  for (let i = 0; i < num.toString().length; i++) {
    let subStr = num.toString().substring(i);

    for (let j = subStr.length; j >= 0; j--) {
      let partOfSubStr = subStr.substring(0, j);
      if (partOfSubStr.length <= 1) continue;

      if (isPalindrome(partOfSubStr)) {
        if (partOfSubStr.length > palLength) {
          palLength = partOfSubStr.length;
          palNum = Number(partOfSubStr);
        }
      }
    }
  }

  return palNum == '' ? 0 : palNum;
};

module.exports = extractPalindrome;
