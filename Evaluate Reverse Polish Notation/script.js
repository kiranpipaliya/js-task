// ===================================
// Evaluate Reverse Polish Notation
// ==================================

// Evaluate the value of an arithmetic expression in Reverse Polish Notation.
// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
// Note that division between two integers should truncate toward zero.
// It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

// Example 1:

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Example 2:
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6
// Example 3:

// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

// Constraints:

// 1 <= tokens.length <= 104
// tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
// const evalRPN = function (tokens) {
//   const stack = [];
//   for (let i = 0; i < tokens.length; i++) {
//     if (tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/') {
//       const val1 = stack.pop();
//       const val2 = stack.pop();
//       if (tokens[i] == '+') {
//         stack.push(val2 + val1);
//       }
//       if (tokens[i] == '-') {
//         stack.push(val2 - val1);
//       }
//       if (tokens[i] == '*') {
//         stack.push(val2 * val1);
//       }
//       if (tokens[i] == '/') {
//         stack.push(Math.trunc(val2 / val1));
//       }
//     } else {
//       stack.push(+tokens[i]);
//     }
//   }
//   return stack[0];
// };

// Batter Way
const evalRPN = function (tokens) {
  const stack = [];

  /* A hash table. */
  const operation = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b),
  };

  for (let token of tokens) {
    if (operation[token]) {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(operation[token](a, b));
    } else {
      stack.push(+token);
    }
  }
  return stack[0];
};

console.log(evalRPN(['4', '13', '5', '/', '+']));
