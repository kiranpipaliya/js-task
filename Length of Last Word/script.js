const LengthLastWord = function (s) {
  let count = 0;
  let string = s.trim();
  let n = s.trim().length;
  let i = 0;
  while (i < n) {
    if (string[i] !== ' ') {
      count++;
      i++;
    } else {
      while (i < n && string[i] == ' ') {
        i++;
        if (i == n) {
          return count;
        } else {
          count = 0;
        }
      }
    }
  }
  return count;
};

console.log(LengthLastWord('     hello       world    how   '));

/// Solution 2 ///
// const LengthLastWord = function (s) {
//   let string = s.trim();
//   let wordLength = string.split(' ').reverse()[0].length;
//   console.log(wordLength);
// };

/// Solution 3 ///
// const LengthLastWord = function (s) {
//  let split = s.split(' ');
//  for (let i = 0; i < split.length; i++) {
//    if (split[i].length === 0) {
//      split.splice(i, 1);
//      i--;
//    }
//  }
//  return split[split.length - 1].length;
// };

console.log(LengthLastWord('     hello       world    how   '));
