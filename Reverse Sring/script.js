// Reverse String
// S = O(1)
// T = O(n)

// const ReverseString = function (s) {
//   let start = 0;
//   let end = s.length - 1;
//   while (start <= end) {
//     const temp = s[start];
//     s[start] = s[end];
//     s[end] = temp;
//     start++;
//     end--;
//   }
//   return s;
// };
// console.log(ReverseString(['h', 'e', 'l', 'l', 'o']));

/// Faster Way ///
// const ReverseString = function (s) {
//   for (let i = 0; i < Math.floor(s.length / 2); i++) {
//     const temp = s[i];
//     s[i] = s[s.length - i - 1];
//     s[s.length - i - 1] = temp;
//   }
//   return s;
// };
// console.log(ReverseString(['h', 'e', 'k', 'l', 'o']));

// Question 2 /////////////////////////////////////////////////////////////////////////////

const isLetter = function (char) {
  return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
};
const solution = function (string) {
  let str = string.split('');
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    let j = str.length - i - 1;
    if (isLetter(str[i]) && isLetter(str[j])) {
      let tempChar = str[i];
      str[i] = str[j];
      str[j] = tempChar;
    }
  }
  return str.join('');
};

console.log(solution('Web1ots-Technologies=code-Q!'));
// WQb1doc-seigolonhceT=stoe-e!
