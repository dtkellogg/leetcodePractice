nums = [1,3,-1,-3,5,3,6,7], k = 3  // Output: [3,3,5,5,6,7]

var maxSlidingWindow = function(nums, k) {
    let res = []
    for (let i = 0, j = i + k - 1; i < nums.length - 3; i++, j++, k++) {

        res.push(Math.max(nums[i...j]))
    }
    return res
};

console.log(maxSlidingWindow(nums, k))