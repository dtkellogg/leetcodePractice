s = "abbaca"
s = "abbbabaaa"

// my attempt...
// var removeDuplicates = function(s) {
//     const chars = s.split("")
//     for(const [i, char] of chars.entries()) {
//         if (chars[i] === chars[i+1]) {
//             chars[i] = ""
//             chars[i+1] = ""
//         }
//     }

//     if((new Set(chars)).size === chars.length) {
//         return chars.join("")
//     } else {
//         removeDuplicates(chars.join(""))
//     }
// };

// poppinlp's solutions:

// 1. 🔥🔥🔥 The first solution, we can solve it by using a stack. Here's the code.
// const removeDuplicates = s => {
//   const stack = [];
//   for (const char of s) {
//     stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
//   }
//   return stack.join('');
// };
// 2. The second solution, we use 2 pointers. One for traversal and one for store result.

// const removeDuplicates = s => {
//   const arr = s.split('');
//   let ans = 0;
//   for (let i = 0; i < arr.length; ++i) {
//     ans === 0 || arr[i] !== arr[ans - 1] ? (arr[ans++] = arr[i]) : --ans;
//   }
//   return arr.slice(0, ans).join('');
// };
// 3. The third solution which is little bit cheating, we use regular expression to do the replacement. And finally get the answer.

// const removeDuplicates = s => {
//   const s2 = s.replace(/(.)\1/g, '');

//   console.log(`s: ${s}, s2: ${s2}`)
//   return s2.length === s.length ? s : removeDuplicates(s2);  // function is repeated until the input === s2
// };

console.log(removeDuplicates(s))