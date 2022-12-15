// Check if a number or part of it is a palindrome. For example, the number 1234437 is not a palindrome, but its part 3443 is a palindrome. Numbers less than 10 are not considered a palindrome.

// Input parameters: number

// Output: the palindrome extracted from the number, or 0 if the extraction failed.

const palindrome = (num) => {};

export default palindrome;

//how to check if a number or part of it is a palindrome in js?
function isPalindrome(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
  }

console.log(isPalindrome('3443'));
