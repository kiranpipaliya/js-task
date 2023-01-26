// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

const validPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;

  const check = function (start, end) {
    while (start <= end) {
      if (s[start] != s[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  };

  while (start <= end) {
    if (s[start] !== s[end]) {
      if (check(start + 1, end) || check(start, end - 1)) {
        return true;
      } else {
        return false;
      }
    }
    start++;
    end--;
  }
  return true;
};
console.log(validPalindrome('"aba"'));
