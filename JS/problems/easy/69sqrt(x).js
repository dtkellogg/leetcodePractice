x = 4

var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x))  // Math.trun also works instead of floor
};


// O(log n):
// var mySqrt = function(x) {
//   if (x < 1) return 0;
//   let high = x;
//   let low = 1;
//   let mid = 0;
//   while(low + 1 < high) {
//     mid = Math.floor((high + low)/2);
//     if (mid * mid > x) {
//       high = mid;
//     } else if (mid * mid < x) {
//       low = mid;
//     } else {
//       return mid;
//     }
//   }
//   return low;
// };

console.log(mySqrt(x))