arr = [2,6,4,1]  // Output: false


// my solution (it works well. 97%)
var threeConsecutiveOdds = function(arr) {
    for(let i = 0; i < arr.length - 2; i++) {
        if(arr[i] % 2 === 1 && arr[i+1] % 2 === 1 && arr[i+2] % 2 === 1) return true
    }
    return false
};


////////////////////////////////////////////////////////////////
// Other solutions

// Runtime: 72 ms, faster than 89.54% of JavaScript online submissions
// Memory Usage: 36.8 MB, less than 22.22% of JavaScript online submissions

const threeConsecutiveOdds = arr =>
  arr
    .map(n => n % 2)
    .join('')
    .includes('111');
// If you prefer more inside-the-box solutions, here's some bitwise shenanigans.

// Runtime: 64 ms, faster than 98.69% of JavaScript online submissions
// Memory Usage: 36.5 MB, less than 62.09% of JavaScript online submissions

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = arr => {
  for (let i = 0, x = 0; i < arr.length; i++) {
    x = arr[i] % 2 ? x | [1, 2, 4][i % 3] : 0;
    if (7 === x) return true;
  }
  return false;
};
// And here's basically the same idea with an array.

// Runtime: 68 ms, faster than 95.42% of JavaScript online submissions
// Memory Usage: 37.2 MB, less than 5.23% of JavaScript online submissions

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = arr => {
  for (let i = 0, x = new Array(3); i < arr.length; i++) {
    x[i % 3] = arr[i] % 2;
    if ('[1,1,1]' === JSON.stringify(x)) return true;
  }
  return false;
};

////////////////////////////////////////////////////////////////////////////////
// PRACTICE


console.log(threeConsecutiveOdds(arr))