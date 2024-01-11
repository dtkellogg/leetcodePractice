nums = [100,4,200,1,3,2]  // Output: 4
nums = [0,3,7,2,5,8,4,6,0,1]  // Output: 9


var longestConsecutive = function(nums) {
  let maxLen = 0,
    numsSet = new Set(nums)

  for(let num of numsSet) {
    let curLen = 1,
      curVal = num
    if(!numsSet.has(num - 1)) {
      while(numsSet.has(curVal + 1)) {
        curLen++
        curVal++
      }
      maxLen = Math.max(maxLen, curLen)
    }
  }

  return maxLen
};


///////////////////////////////////////
// practice

const longestConsecutive = (nums) => {
}

console.log(longestConsecutive(nums))