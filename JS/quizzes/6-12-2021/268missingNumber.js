nums = [3,0,1]
// nums = [0,1]

var missingNumber = function(nums) {
    let numsArr = (new Array(nums.length)).fill(-1)
    
    for(const num of nums) {
        numsArr[num] = num
    }
    console.log(numsArr)

    return numsArr.length !== nums.length
        ? numsArr.indexOf(-1)
        : nums.length
};

console.log(missingNumber(nums))