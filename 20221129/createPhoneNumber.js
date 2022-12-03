function createPhoneNumber(numbers) {
  // we convert the array of numbers into a string to apply the substring method into a template literal
  const stringNumber = numbers.join('')
  const phoneNumber = `(${stringNumber.substring(0, 3)}) ${stringNumber.substring(3, 6)}-${stringNumber.substring(6)}`
  return phoneNumber
}

// check for reduce() method, it allows scalability
