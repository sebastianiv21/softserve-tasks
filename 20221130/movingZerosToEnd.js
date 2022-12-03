function moveZeros(arr) {
  return arr.sort((a, b) => (b === 0 ? -1 : a === 0 ? 1 : 0));
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
