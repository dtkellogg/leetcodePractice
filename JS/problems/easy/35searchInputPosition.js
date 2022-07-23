nums = [1,3,5,6], target = 5


// binary search:
function searchInsert(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};


function binarySearch(array, target, start, end) {
	 // If the target is less then the very last item then insert it at that item index
	 // because anything index less then that has already been confirmed to be less then the target.
	 // Otherwise insert it at that item index + 1
	 // because any index grater then that has already been confirmed to be greater then the target
    if (start > end) return start;
    
    const midPoint = Math.floor((start + end)/2);
    
	// found target
    if (array[midPoint] === target) return midPoint;
    
	// search the left side
    if (array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);
    // search the right side
    if (array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
}

////////////////////////////////////////////////////////////////
// var searchInsert = function(nums, target) {
//     if(target === 0) {
//         return 0
//     } else if (nums.indexOf(target) === -1) {
//         const arr = new Array(...nums, target)
//         return arr.sort((a,b) => a - b).indexOf(target)
//     } else {
//         return nums.indexOf(target)
//     }
// };

// var searchInsert = function(nums, target) {
//     for(let i=0; i<nums.length; i++) {
//         if(target === nums[i] || target < nums[i]) {
//             return i
//         }
//     }
    
//     return nums.length
// };

var searchInsert = function(nums, target) {
}

console.log(searchInsert(nums, target))