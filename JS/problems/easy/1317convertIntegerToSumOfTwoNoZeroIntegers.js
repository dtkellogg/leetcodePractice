n = 1010 // [11,999]

// Brute force solution. We traversal all possible numbers and check whether it includes 0.
const memo = new Uint8Array(10000);

const helper = x => {
  if (memo[x] !== 0) return memo[x] === 1;
  while (x > 0) {
    if (x % 10 === 0) { memo[x] = 2; return false; }
    x = x / 10 << 0;
  }
  memo[x] = 1;
  return true;
};
const getNoZeroIntegers = n => {
  let m = 0;
  while (n--) {
    if (helper(++m) && helper(n)) return [m, n];
  }
};

////////////////////////////////////////////////////////////////

// Non brute force solution. We initial the values x and y as 1 and n - 1.

// If y or x contains 0, then we gonna change it. 
// Here I choose to minus value from y and add it to x. 
// For example, if the 0 is in the tens, then we minus 10 from y and add 10 to x.

// We keep looping until neither x and y contains 0.
// const helper = x => {
//   let digit = 0;
//   while (x > 0) {
//     if (x % 10 === 0) break;
//     x = x / 10 << 0;
//     ++digit;
//   }
//   return digit;
// };
// const getNoZeroIntegers = n => {
//   let x = 1, y = n - 1;
//   while (true) {
//     let num = 10 ** helper(y);
//     if (num < y) {
//       y -= num;
//       x += num;
//       continue;
//     }
//     num = 10 ** helper(x);
//     if (num > x) break;
//     y -= num;
//     x += num;
//   }
//   return [x, y];
// };


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(getNoZeroIntegers(n))