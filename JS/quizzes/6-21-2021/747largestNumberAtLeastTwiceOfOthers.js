nums = [3,6,1,0]

var dominantIndex = function(nums) {
    const sorted = nums.splice(0).sort((a,b) => b - a)
    const biggestNum = sorted[0]
    const secondBiggestNum = sorted[1]

    console.log(`biggestNum: ${biggestNum}, secondBiggestNum: ${secondBiggestNum}`)
    console.log(biggestNum >= 2 * secondBiggestNum)
    console.log(nums.indexOf(biggestNum))
    console.log([...nums])
    
    return biggestNum >= 2 * secondBiggestNum
        ? nums.indexOf(biggestNum)
        : -1
};

console.log(dominantIndex(nums))