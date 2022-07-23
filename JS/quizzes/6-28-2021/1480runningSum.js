nums = [1,2,3,4]

var runningSum = function(nums) {
    nums.reduce((a,c,i) => {
        console.log(`c: ${c}, a: ${a}, i: ${i}`)
        return nums[i] += a
    })
    return nums
};

console.log(runningSum(nums))