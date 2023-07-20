nums = [1,-2,3,-2]  // 3
nums = [5,-3,5]  // 10
nums = [-3,-2,-3]  // -2

function maxSubarraySumCircular(nums) {
  // Check if all elements are negative (corner case)
  let allNegative = true;
  for (let num of nums) {
    if (num >= 0) {
      allNegative = false;
      break;
    }
  }

  // If all elements are negative, return the maximum element as the result
  if (allNegative) {
    let maxElement = Math.max(...nums);
    return maxElement;
  }

  // Case 1: Maximum subarray is non-circular (same as regular Kadane's Algorithm)
  let maxSumNonCircular = kadanesAlgorithm(nums);

  // Case 2: Maximum subarray is circular
  let totalSum = 0;
  for (let num of nums) {
    totalSum += num;
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = -nums[i];
  }

  let minSum = kadanesAlgorithm(nums);

  let maxSumCircular = totalSum + minSum;

  return Math.max(maxSumNonCircular, maxSumCircular);
}

function kadanesAlgorithm(arr) {
  let currentMax = arr[0];
  let globalMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    globalMax = Math.max(globalMax, currentMax);
  }

  return globalMax;
}

console.log(maxSubarraySumCircular(nums))


// Explanation:

// We define the function maxSubarraySumCircular(nums) to solve the circular 
// array problem. First, we find the maximum subarray sum for the non-circular 
// case using the kadanesAlgorithm function.

// Next, we calculate the total sum of the array in the variable totalSum.

// We invert the signs of the elements in the array nums to find the minimum 
// subarray sum (using the same kadanesAlgorithm function).

// The maximum circular subarray sum is then calculated as totalSum + minSum, 
// where minSum is the result obtained from finding the minimum subarray sum 
// with inverted signs.

// Finally, we compare the maximum subarray sums from both cases and return the 
// larger value as the answer.