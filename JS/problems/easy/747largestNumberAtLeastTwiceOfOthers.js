nums = [3,6,1,0]
nums = [1,2,16,35,44,100,27,0]

// Best Way:

var dominantIndex = function(nums) {
  let first = -Infinity;
  let second = -Infinity;
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
      ans = i;
    } else if (nums[i] > second) {
      second = nums[i];
    }
  }
  return first >= second * 2 ? ans : -1;
};


////////////////////////////////////////////////////////////////


// var dominantIndex = function(nums) {
//     if(nums.length <= 1) return -1
    
//     let biggestIndex = nums.indexOf(Math.max(...nums))
//     let sorted = nums.sort((a, b) => a - b)
//     let biggestNum = sorted[sorted.length - 1]

//     console.log(Math.max(...nums))
//     console.log(`biggestIndex: ${biggestIndex}`)
//     console.log(nums)
//     console.log(biggestNum)
//     console.log(2 * sorted[sorted.length - 2])
//     console.log(biggestNum >= (2 * sorted[sorted.length - 2]))

//     if(biggestNum >= (2 * sorted[sorted.length - 2])) {
//         return biggestIndex
//     } else {
//         return -1
//     }
// };


// my way.... faster than 79.34%
// var dominantIndex = (nums) => {
//     if(nums.length === 1) return 0
    
//     const sorted = nums.slice(0).sort((a,b) => a - b)
//     const last = sorted[sorted.length - 1]
//     const secondToLast = sorted[sorted.length - 2]


//     return last >= 2 * secondToLast
//         ? nums.indexOf(last)
//         : -1
// }


////////////////////////////////////////////////////////////////////////////////
// PRACTICE


console.log(dominantIndex(nums))