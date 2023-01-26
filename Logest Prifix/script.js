// const LongestPrefix = function (stringArr) {
//   let prefix = '';
//   if (!stringArr.length) return prefix;
//   for (let i = 0; i < stringArr[0].length; i++) {
//     let commonChar = stringArr[0][i];
//     for (let j = 0; j < stringArr.length; j++) {
//       if (stringArr[j][i] !== commonChar) {
//         return prefix;
//       }
//     }
//     prefix += commonChar;
//   }
//   return prefix;
// };
// console.log(LongestPrefix(['flower', 'flow', 'flight']));

// Faster Way //

const LongestPrefix = function (stringArr) {
  let prefix = '';
  const minString = Math.min(...stringArr.map((item) => item.length));
  for (let i = 0; i < minString; i++) {
    let commonChar = stringArr[0][i];
    if (stringArr.every((item) => item[i] === commonChar)) {
      prefix += commonChar;
    } else {
      break;
    }
  }
  return prefix;
};
console.log(LongestPrefix(['flower', 'flow', 'flight']));
