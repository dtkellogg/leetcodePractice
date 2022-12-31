nums = [-1,0,3,5,9,12], target = 9  // Output: 4

var search = function(nums, target) {
    let left = 0,
        right = nums.length - 1
    while(left < right) {
        let mid = left + Math.floor((right - left + 1) / 2)
        if(target >= nums[mid]) {
            left = mid
        } else {
            right = mid - 1
        }
    }
    return nums[left] == target ? left : -1
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(search(nums, target))