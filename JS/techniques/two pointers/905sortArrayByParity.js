nums = [3,1,2,4]
nums = [0,1]  // Output: [1,0]

// 🔥🔥🔥 This is the fastest and takes up the least memory

// var sortArrayByParity = function(A) {
//     let i = 0;
//     let j = A.length - 1;
//     while(i < j){
//       if(A[i] % 2 === 0){
//         i++;
//         continue;
//       }
//       if(A[j] % 2 === 1){
//         j--;
//         continue;
//       }
//       if(A[i] % 2 === 1 && A[j] % 2 === 0){
//         const temp = A[i];
//         A[i] = A[j];
//         A[j] = temp;
//         i++;
//         j--;
//       }
//     }
//     return A;
// };

//////////////////////////////////////¡™//////////////////////////
// this first solution is faster than below and takes up less memory
// var sortArrayByParity = function(nums) {
//     let output = []
    
//     for(let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0) {
//             output.unshift(nums[i])
//         } else {
//             output.push(nums[i])
//         }
//     }
    
//     return output
// };


// although, this is also good (comparable speed and memory) (99.88%.......)
// var sortArrayByParity = function(A) {
//     return [...A.filter(v => v % 2 === 0), ...A.filter(v => v % 2 !== 0)];
// };

// I wouldn't recommend this solution. Sorting is O(nlog(n)), but we can get to O(n) with a simple partition algorithm. Simple isn't always better.
// var sortArrayByParity = function(A) {
//     return A.sort((a, b) => { return a % 2 - b % 2; });
// };




////////////////////////////////////////////////////////////////////////////////////////////////
// PRACTICE

var sortArrayByParity = function(nums) {
  let l = 0,
      r = nums.length - 1;

  while(l < r) {
    if(nums[l] % 2 === 0) {
      l++
      continue
    }
    if(nums[l] % 2 === 1 && nums[r] % 2 === 0) {
      [nums[l], nums[r]] = [nums[r], nums[l]]
      l++
      r--
    } else {
      l++
    }
  }

  return nums
}    

console.log(sortArrayByParity(nums))