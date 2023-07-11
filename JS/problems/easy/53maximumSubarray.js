nums = [-2,1,-3,4,-1,2,1,-5,4]

var maxSubArray = function(nums) {
  for (let i = 1; i < nums.length; i++){
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    console.log(nums)
  }
  return Math.max(...nums);
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

// var maxSubArray = function(nums) {
// }

console.log(maxSubArray(nums))

// For each iteration, you store the current max in nums[i] (the value isn't needed 
// anymore so it's ok to overwrite).
// The comparison is deciding whether to
// a) reset the array --> thus reset with the sum equal to the current value of the array, or
// b) to add onto the current sum --> nums[i] (not yet overwritten) + nums[i - 1] (holds 
// max sum at that index, is overwritten)

// After the loop, we check the maximum sum of all indexes and this is the answer. 
// So this is really keeping track of the value of the best array at each point of the index
// without wasting space to store what the array actually is - the only thing that matters is its sum.