const TowSum = function (nums, target) {
  const previusState = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const neededValue = target - current;
    const index2 = previusState[neededValue];
    if (index2 != null) {
      return [index2, i];
    } else {
      previusState[current] = i;
    }
  }
};
console.log(TowSum([2, 7, 11, 15], 9));

// const LengthLastWord = function (s) {
//   let count = 0;
//   let string = s.trim();
//   let n = s.trim().length;
//   let i = 0;
//   while (i < n) {
//     if (string[i] !== ' ') {
//       count++;
//       i++;
//     } else {
//       while (i < n && string[i] == ' ') {
//         i++;
//         if (i == n) {
//           return count;
//         } else {
//           count = 0;
//         }
//       }
//     }
//     console.log('hellow');
//   }
//   return count;
// };

// console.log(LengthLastWord('     hello       world    how   '));

/// Solution 2 ///
// const LengthLastWord = function (s) {
//   let string = s.trim();
//   let wordLength = string.split(' ').reverse()[0].length;
//   console.log(wordLength);
// };

console.log(LengthLastWord('     hello       world    how   '));
