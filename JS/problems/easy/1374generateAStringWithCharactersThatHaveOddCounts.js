n = 4

var generateTheString = function(n) {
  return n % 2 === 0 ? `${'a'.repeat(n - 1)}b` : 'a'.repeat(n);
};

// var generateTheString = function(n) {
//     if (n%2 === 0) {
//         return "p".repeat(n-1) + "a";
//     }
//     return "p".repeat(n);
// };

console.log(generateTheString(n))