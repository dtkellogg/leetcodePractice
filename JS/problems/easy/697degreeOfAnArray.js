nums = [1,2,2,3,1]
nums = [1,2,2,3,1,4,2]

const findShortestSubArray = (nums) => {
    let max = 0
    const counts = {},
          firstIndexes = {},
          lastIndexes = {},
          res = nums.length

    for (let i = 0; i < nums.length; i++) {
        const k = nums[i]
        counts[k] = (counts[k] || 0) + 1
        max = Math.max(max, counts[k])
        if (firstIndexes[k] === undefined) {
            firstIndexes[k] = i
        }
        lastIndexes[k] = i
    }

    for (const k in counts) {
        if (counts[k] === max) {
            res = Math.min(res, lastIndexes[k] - firstIndexes[k] + 1)
        }
    }

    return res
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(findShortestSubArray(nums))