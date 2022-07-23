x = 4
x = 8
// x = 5  // Output: 2

// var mySqrt = function(x) {
//     return Math.floor(Math.sqrt(x))  // Math.trun also works instead of floor
// };

////////////////////////////////////////////////////////////////
// O(log n):
var mySqrt = function(x) {
  if (x < 1) return 0;
  let high = x;
  let low = 1;
  while(low + 1 < high) {  // +1 b/c you can't find middle when terms are 1 apart
    mid = Math.floor((high + low)/2);

    console.log(`low: ${low}, mid: ${mid}, high: ${high}`)
    if (mid * mid > x) {
      high = mid;
    } else if (mid * mid < x) {
      low = mid;
    } else {
      return mid;
    }
  }
  return low;
};



////////////////////////////////////////////////////////////////
// Practice


// var mySqrt = function(x) {
//   let l = 1, r = x

//   while (l < r) {
//     let 
//   }
// };

console.log(mySqrt(x))