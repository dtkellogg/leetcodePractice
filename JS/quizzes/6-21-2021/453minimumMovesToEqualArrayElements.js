nums = [1,2,3]

var minMoves = function(nums) {
    const min = Math.min(...nums)
    const len = nums.length
    const sum = nums.reduce((a,c) => a + c, 0)

    console.log(`min: ${min}, len: ${len}, sum: ${sum}`)
    
    return sum - min * len
};

console.log(minMoves(nums))