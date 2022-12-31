x = 123

var reverse = function(x) {
    const absReversed = Math.abs(x).toString().split("").reverse().join("")
    return absReversed < 2 ** 31
        ? absReversed * Math.sign(x)
        : 0
};

////////////////////////////////
// var reverse = function(x) {
//     revWord = parseInt(x.toString().split("").reverse().join(""))
    
//     if((revWord < -Math.pow(2, 31)) || (revWord > Math.pow(2, 31) - 1)) {
//         return 0
//     } else if(x >= 0) {
//         return revWord
//      } else {
//         return -revWord
//      }
// };

////////////////////////////////
// var reverse = function(x) {
//     const isNegative = x < 0;
//     const xStrArr = Math.abs(x).toString().split("");
//     const reversStr = xStrArr.reverse().join("");
//     const num = Number(reversStr);
//     if (isNegative && num > Math.pow(2, 31)) {
//         return 0;
//     }
//     if (!isNegative && num > Math.pow(2, 31) - 1) {
//         return 0;
//     }
//     return isNegative ? -num : num;
// };

// var reverse = function(x) {
//   const absReversed = Math.abs(x).toString().split('').reverse().join('');
//   if (absReversed > 2**31) return 0;
//   return absReversed * Math.sign(x);
// };

////////////////////////////////////////////////////////////////////////////////
// PRACTICE

var reverse = function(x) {
};

console.log(reverse(x))