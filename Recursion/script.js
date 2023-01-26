// // Factorial
'use strict';
//  0, 0n, -0, “”, null, undefined, and NaN
// if (1) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// var x = 23;

// (function () {
//   var x = 43;
//   (function random() {
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// })();

// let hero = {
//   powerLevel: 99,
//   getPower() {
//     return this.powerLevel;
//   },
// };

// let getPower = hero.getPower;

// let hero2 = { powerLevel: 42 };
// console.log(getPower());
// console.log(getPower.apply(hero2));

// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

const fn = (n) => {
  return (n * (n + 1)) / 2;
};
console.log(fn(8));

// const factorial = (n) => {
//   if (n < 0) return -1;
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// };

// const factorial = (n) => {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// };

// console.log(factorial(5));

// let n = 5;
// let factorial = n;
// for (let i = 1; i < n; i++) {
//   factorial = factorial * (n - i);
// }
// console.log(factorial);

// // Find Fibinoca Number

// const fbN = (n) => {
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   const small1 = fbN(n - 1);
//   const small2 = fbN(n - 2);

//   console.log(small1, small2);
//   const ans = small1 + small2;
//   return ans;
// };
// console.log(fbN(3));
// 0 1 1 2 3 5 8 13

// const countNumber = (n) => {
//   if (n === 0) return 0;
//   const small1 = countNumber(Math.floor(n / 10));
//   return small1 + 1;
// };
// console.log(countNumber(78210));

// const sumNumber = (n) => {
//   if (n === 0) return n;
//   const small1 = sumNumber(Math.floor(n / 10));
//   return small1 + (n % 10);
// };
// console.log(sumNumber(12345));

// const multiplie = (m, n) => {
//   if (n === 0) return n;
//   const small1 = multiplie(m, n - 1);
//   return small1 + m;
// };
// console.log(multiplie(5, 3));

// Not  n<=0
// const countZero = (n) => {
//   if (n === 0) return 0;
//   const small1 = countZero(Math.floor(n / 10));
//   const lastD = n % 10;
//   if (lastD === 0) {
//     return 1 + small1;
//   } else {
//     return small1;
//   }
// };
// console.log(countZero(0));
