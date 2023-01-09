nums = [-1,0,3,5,9,12], target = 9  // Output: 4
// nums = [-1,0,3,5,9,12], target = 2  // Output: -1
nums = [5], target = 5  // Output: 0

// var search = function(nums, target) {
//     let left = 0,
//         right = nums.length - 1
//     while(left < right) {
//         let mid = left + Math.floor((right - left + 1) / 2)
//         console.log(`l: ${left}, r: ${right}, mid: ${mid}`)
//         if(target === nums[mid]) return mid

//         if(target >= nums[mid]) {
//             left = mid
//         } else {
//             right = mid - 1
//         }
//     }
//     return nums[left] == target ? left : -1
// };

// 🔥🔥🔥 THIS ALSO WORKS... basically same as above but different implementations of binary search
// var search = (nums, target) => {
//     let l = 0,
//         r = nums.length - 1;

//     while (l < r) {
//         let mid = Math.floor((r + l)/2)

//         console.log(`l: ${l}, r: ${r}, mid: ${mid}`)

//         if(target === nums[mid]) {
//             return mid
//         }
//         if(target > nums[mid]) {
//             l = mid + 1
//         } else {
//             r = mid - 1;
//         }
//     }

//     return nums[l] === target ? l : -1
// }


////////////////////////////////
// another olution
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


////////////////////////////////
// Practice

var search = (nums, target) => {
  let l = 0, r = nums.length - 1

  while(l < r) {
    let mid = Math.floor((r + l)/2)
    if(nums[mid] === target) return mid
    else if(nums[mid] > target) r = mid - 1
    else l = mid + 1
  }

  return nums[l] === target ? l : -1
}

console.log(search(nums, target))