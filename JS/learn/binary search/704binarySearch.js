nums = [-1,0,3,5,9,12], target = 9  // Output: 4 ... Explanation: 9 exists in nums and its index is 4


// my way:
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

////////////////////////////////
// same idea as above but online solution
var search = function(nums, target) {
    let lo = 0, hi = nums.length-1;
    while (lo < hi) {
        let mid = lo + Math.floor((hi-lo+1)/2);
        if (target < nums[mid]) {
            hi = mid - 1
        } else {
            lo = mid; 
        }
    }
    return nums[lo]==target?lo:-1;
};

console.log(search(nums,target))