nums = [4,5,6,7,0,1,2], target = 0 // Output: 4

var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
    
  while (left <= right) {

    let mid = Math.floor((left + right) / 2);

    console.log("-----------------")
    console.log("WHILE")
    console.log(`left: ${left}, right: ${right}`)
    console.log(`mid: ${mid}`)

    
    if (nums[mid] === target) {
      return mid;
    }
    
    // When dividing the roated array into two halves, one must be sorted.
    
    // Check if the left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        // target is in the left

        console.log("1. target is in the left")

        right = mid - 1;
        
      } else {
        // target is in the right

        console.log("2. target is in the right")

        left = mid + 1;
      }
    } 
    
    // Otherwise, the right side is sorted
    else {
      if (nums[mid] <= target && target <= nums[right]) {

        console.log("3. target is in the right")

        // target is in the right
        left = mid + 1;

      } else {
        // target is in the left

        console.log("4. target is in the left")

        right = mid - 1;
      }
    }
    
    
  }
    
  return -1;
};

////////////////////////////////////////////////////////////////
// above algorithm, but w/o comments

var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
    
  while (left <= right) {

    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
    
  return -1;
};

////////////////////////////////////////////////////////////////
// PRACTICE

// var search = (nums, target) => {
//   let left = 0, right = nums.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if(nums[mid] === target) return mid
//     if(nums[left] <= nums[mid]) {
//       if(nums[left] <= target && target <= nums[mid]) {
//         right = mid - 1
//       } else {
//         left = mid + 1
//       }
//     } else {
//       if(nums[mid] <= target && target <= nums[right]) {
//         left = mid + 1
//       } else {
//         right = mid -1 1
//       }
//     }
//   }
//   return -1
// }

console.log(search(nums, target))