nums = [2,2,1]
nums = [4, 1, 2, 1, 2]

////////////////////////////////////////////////////////////////
// Iterate through and store in a Map:
// var singleNumber = function(nums) {
//     const numCount = new Map()
    
//     nums.map(num => {
//         if (numCount.has(num)) {
//             numCount.set(num, numCount[num] + 1)
//         } else {
//             numCount.set(num, 1)
//         }
//     })
    
//     for (const [k, v] of numCount) {
//         if (v === 1) return k
//     }
// };

// var singleNumber = function(nums) {
//     const numCount = new Map()
    
//     for(let i=0; i<nums.length; i++) {
//         numCount.set(nums[i], numCount.get(nums[i]) + 1 || 1)
//     }

//     console.log(numCount)
    
//     for(let [k,v] of numCount) {
//         if(v === 1) return k
//     }
// };

////////////////////////////////
// time O(n)
// space O(1)
// function singleNumber(nums) {
//   let num = 0;
//   for (let n of nums) {
//     num ^= n;
//   }
//   return num;
// }

////////////////////////////////
// 🔥

// function singleNumber(nums) {
// 	return nums.reduce((prev, curr) => prev ^ curr);
// }

////////////////////////////////
var singleNumber = function(nums) {
  return nums.reduce((prev, curr) => {
  console.log(`prev: ${prev}, curr: ${curr}`);

  return prev ^ curr;
  }, 0);
};



console.log(singleNumber(nums))

