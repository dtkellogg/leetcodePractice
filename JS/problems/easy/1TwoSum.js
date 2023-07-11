nums = [2,7,11,15], target = 9
nums = [2,7,11,15], target = 17

// var twoSum = function(nums, target) {
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = 0; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target && i !== j) {
//                 return [i, j]
//             }
//         }
//     }
// };

// var twoSum = function(nums, target) {
//     let map = new Map();
    
//     for(let i = 0; i < nums.length; i ++) {
//         if(map.has(target - nums[i])) {
//             return [map.get(target - nums[i]), i];
//         } else {
//             map.set(nums[i], i);
//         }
//     }
// 	return [];
// };


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

var twoSum = function(nums, target) {
  let map = new Map();
  for(let i = 0; i < nums.length; i ++) {
      if(map.has(target - nums[i])) {
          return [map.get(target - nums[i]), i];
      } else {
          map.set(nums[i], i);
      }
  }
	return [];
};

console.log(twoSum(nums, target))