function nextPal(val) {
  // we have to start evaluating from the next value
  let nextNum = val + 1
  while (true) {
    // putting input backwards and checking if the number is the same forward and backward
    const reversedNum = nextNum.toString().split('').reverse().join('')
    if (nextNum == reversedNum) {
      return nextNum
      // if the number is not a palindrome, add 1 to the value and evaluate again
    } else nextNum += 1
  }
}
