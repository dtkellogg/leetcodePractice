nums = [1,1,2]  // Output: 2, nums = [1,2,_] .... Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. It does not matter what you leave beyond the returned k (hence they are underscores).
// nums = [0,0,1,1,1,2,2,3,3,4]  // Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// var removeDuplicates = function(nums) {
//     let i = 0;
//     for (let j = 0; j < nums.length; j++) {
//         console.log(`i: ${i}, j: ${j}, nums[i]: ${nums[i]}, nums[j]: ${nums[j]}`)
//         console.log(nums)
//         console.log("--------------------------------")

//         if (nums[j] != nums[i]) {

//             console.log("IF")
//             nums[++i] = nums[j];
//         }

//     }
//     console.log(nums.slice(0, i) + 1)
//     return ++i;
// };

// same as above, but w/o comments

// var removeDuplicates = function(nums) {
//     let i = 0;
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] != nums[i]) 
//             nums[++i] = nums[j];
//     }
//     return ++i;
// };


var removeDuplicates = function(nums) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = 0; j < nums.length; j++) {
      if(nums[i] !== nums[j]) {
        nums[i] = nums[j]
      }
    }
  }
  return nums
}

////////////////////////////////////////////////////////////////////////////////
// PRACTICE
nums = [1,1,2]  // Output: 2, nums = [1,2,_] .... Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. It does not matter what you leave beyond the returned k (hence they are underscores).


var removeDuplicates = function(nums) {
  for(let l = 0, r = 0; r < nums.length; r++) {
    if(nums[r] !== nums[l]) {
      l++
      [nums[r], nums[l]] = [nums[l], nums[r]]
    }
  }
  return nums
}

console.log(removeDuplicates(nums))