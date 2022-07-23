nums = [-2,1,-3,4,-1,2,1,-5,4]

var maxSubArray = function(nums) {
    let min = nums[0]
    let max = 0
    
    for(let i=0; i<nums.length; i++) {
        min = Math.min(min, nums[i])
        max = Math.max(max, nums[i] + nums[i+1])
        console.log(max)
        nums[i] = Math.min(max, nums[i])
    }
    
    return nums
    // return Math.max(nums)
};

console.log(maxSubArray(nums))