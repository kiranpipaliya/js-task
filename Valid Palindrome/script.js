// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// const isPalindrome = function (s) {
//   let start = 0;
//   let end = s.length - 1;
//   const testCase = /([0-9a-zA-Z])/;
//   while (start < end) {
//     while (start < end && !testCase.test(s[start])) start++;
//     while (start < end && !testCase.test(s[end])) end--;
//     if (s[start].toUpperCase() !== s[end].toUpperCase()) return false;
//     start++;
//     end--;
//   }
//   return true;
// };
// console.log(isPalindrome(' '));

var reverseWords = function (s) {
  const str = s.split(' ');
  let str2 = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '') {
      str2.push(str[i]);
    }
  }
  return str2.reverse().join(' ');
};
console.log('reverser', reverseWords('the sky   is blue'));
