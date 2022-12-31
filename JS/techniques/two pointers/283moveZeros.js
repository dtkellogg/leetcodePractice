nums = [0,1,0,3,12]
nums = [1]  // Output: 1

// var moveZeroes = function(nums) {
//     var count = nums.length
    
//     for (let i = 0; i < count; i++) {
//         if (nums[i] === 0) {
//             const removed = nums.splice(i, 1);
//             nums.push(removed);
//             i--
//             count--
//         }
//     }
// };

// function moveZeroes(nums) {
//   var idx = 0;
//   for (var i = 0; i < nums.length; i++) {
//     console.log(`i: ${i}, idx: ${idx}`)
    
//     if (nums[i] !== 0) {
//       nums[idx] = nums[i];
//       nums[i] = idx === i ? nums[i] : 0;
//       idx++;
//     }

//     console.log(nums)
//     console.log("--------------------------------")
//   }
//   return nums
// }


////////////////////////////////////////////////////////////////
// 🔥 My Way
// function moveZeroes(nums) {
//     let l = 0,
//         r = 0
//     while (r < nums.length) {
//         if(nums[r] !== 0) {
//             [nums[l], nums[r]] = [nums[r], nums[l]]
//             l++
//         }
//         r++
//     }
//     return nums
// }



////////////////////////////////////////////////////////////////////////////////////////////////
// PRACTICE

function moveZeroes(nums) {
  for(let l = 0, r = 0; r < nums.length; r++) {
    if(nums[r] !== 0) {
      [nums[l], nums[r]] = [nums[r], nums[l]]
      l++
    }
  }
  return nums
}

console.log(moveZeroes(nums))