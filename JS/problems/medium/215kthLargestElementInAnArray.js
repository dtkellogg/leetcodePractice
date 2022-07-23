nums = [3,2,1,5,6,4], k = 2 // Output: 5

// my solution

var findKthLargest = function(nums, k) {
    const sorted = nums.sort((a,b) => b - a)
    
    console.log(sorted)
    console.log(`sorted[k-1]: ${sorted[k-1]}`)
    
    return sorted[k-1]
}

////////////////////////////////
// easy to understand.... the other one below is higher rated, but this one is a bit clearer
// const findKthLargest = (nums, k) => {
//     return quickSelect(nums, 0, nums.length - 1, k);
// };

// const quickSelect = (nums, lo, hi, k) => {
//     // use quick sort's idea
//     // put nums that are <= pivot to the left
//     // put nums that are  > pivot to the right
//     for (var i = lo, j = lo; j < hi; j++) {
//         if (nums[j] <= nums[hi]) {
//             swap(nums, i++, j);
//         }
//     }
//     swap(nums, i, j);
    
//     // count the nums that are >= pivot
//     const m = hi - i + 1;
//     // pivot is the one!
//     if (m === k) return nums[i];
//     // pivot is too small, so it must be on the right
//     if (m > k) return quickSelect(nums, i + 1, hi, k);
//     // pivot is too big, so it must be on the left
//     return quickSelect(nums, lo, i - 1, k - m);
// };

// function swap(arr, i, j) {
//     const tmp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = tmp;
// }

////////////////////////////////
// best solution on LeetCode:

// var findKthLargest = function(nums, k) {
//     return quickSelect(nums, 0, nums.length - 1, k);
// };

// function quickSelect(arr, start, end, k) {
//     const pivotIndex = partition(arr, start, end);
//     /**
//      * Use pivotIndex as the seperater. If k is smaller than the length of the 
//      * right side of the array, the target is in the right side of the array. 
//      * If k is larger, the target is in the left side of the array. 
//      */
//     if (k < arr.length - pivotIndex) {
//         return quickSelect(arr, pivotIndex + 1, end, k);
//     } else if (k > arr.length - pivotIndex) {
//         return quickSelect(arr, start, pivotIndex - 1, k);
//     }
//     // pivotIndex is the index of the target if k equals to the length of the 
//     // right side of the array.
//     return arr[pivotIndex];
// };

// function partition(arr, start, end) {
//     /**
//      * Use the last element as pivot for simplicity. Randomized pivot 
//      * is a better way to avoid worst case where the the largest or the smallest 
//      * element is always selected.
//      */
//     const pivot = arr[end];
//     let i = start;
//     let j = end - 1;
//     // move all numbers smaller than pivot to the left and larger to the right
//     while(i <= j) {    
//         while (arr[i] < pivot) {
//             i += 1;
//         } 
//         while (arr[j] > pivot) {
//             j -= 1;
//         }
//         if(i <= j) {
//             swap(arr, i, j);
//             i += 1;
//             j -= 1;
//         }   
//     }
//     // Swap pivot value to the position so that all numbers larger than pivot value 
//     // is on the right, and smaller on the left.
//     swap(arr, i, end);
//     // return the final index where the pivot value is.
//     return i;
// }

// function swap(arr, i, j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
// }

console.log(findKthLargest(nums, k))