nums = [3,6,1,0]

var dominantIndex = function(nums) {
    const sortedNums = nums.slice(0).sort((a,b) => b - a)
    const biggestNum = sortedNums[0]
    const secondBiggestNum = sortedNums[1]
    
    return biggestNum >= 2 * secondBiggestNum
        ? nums.indexOf(biggestNum)
        : -1
};

console.log(dominantIndex(nums))