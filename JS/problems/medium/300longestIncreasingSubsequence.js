nums = [10,9,2,5,3,7,101,18]  // Output: 4

// function lengthOfLIS(nums) {
//     let maxLen = 0,
//         currLen = 0;

//     for(let i = 0; i < nums.length - 1; i++) {
//         if(nums[i] < nums[i+1]) {
//             currLen++
//             if(currLen > maxLen) maxLen = currLen
//         } else {
//             currLen = 0
//         }

//         console.log(`i: ${i}, currLen: ${currLen}, maxLen: ${maxLen}`)
//     }

//     return maxLen
// }

function lengthOfLIS(nums) {
  if (!nums.length) return 0;

  let arr = new Array(nums.length).fill(1);
	
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) arr[i] = Math.max(arr[i], arr[j] + 1);
      
      console.log(`i: ${i}, j: ${j}`);
      console.log(arr)
      console.log("--------------------------------")
    }
  }
  
  return Math.max(...arr);
}

////////////////////////////////////////////////////////////////
// same as above, but w/o comments

// function lengthOfLIS(nums) {
//   if (!nums.length) return 0;

//   let arr = new Array(nums.length).fill(1);
	
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) arr[i] = Math.max(arr[i], arr[j] + 1);
//     }
//   }
  
//   return Math.max(...arr);
// }

console.log(lengthOfLIS(nums))