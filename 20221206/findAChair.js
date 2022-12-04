function meeting(arr, chairs) {
  const count = arr.map((room) => room[1] > room[0].length ? room[1] - room[0].length : 0);
  const result = count.reduce((acc, curr) => acc + curr) >= chairs
      ? 'Game On'
      : 'Not enough!';
  return `[${count}] --> ${result}`;
}

console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 4));
