const palindrome = (num) => {};

export default palindrome;

function isPalindrome(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
  }

console.log(isPalindrome('3443'));
