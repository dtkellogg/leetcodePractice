nums = [3,0,1]
nums = [3,19,22,43,24,2,12,32,30,45,21,23,42,31,37,14,25,8,13,20,5,40,41,18,17,47,15,10,33,34,0,44,11,6,48,7,35,27,4,26,39,38,1,16,36,28,9,46,29]


// This is very inefficient:
// var missingNumber = function(nums) {
//     const sorted = nums.sort((a,b) => a - b)

//     for(let i = 0; i < sorted.length; i++) {
//         if(!sorted.includes(i)) return i
//     }

//     return sorted[sorted.length - 1] + 1
// };

/////////////////////////////////
// time: O(n)
// space: O(n)
var missingNumber = function(nums) {
    // construct array of size n+1, to leave a spot for the missing element.
	// Assign each val to -1 so we can see which position was not filled
    // O(n)
    const res = new Array(nums.length+1).fill(-1);
	
	// "sort" the elements by assigning to the array based on val
    // O(n)
    for(const num of nums) {
        res[num] = num;
    }

    console.log(res)
    
	// the remaining -1 index is the missing value
    // O(n-1)
    return res.indexOf(-1);
};


////////////////////////////////////////////////////////////////
// BEST ONE:
// Sum up the numbers in the array and substract the numbers from 1 to nums.length in the same step

var missingNumber = function (nums) {
  var sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += i + 1 - nums[i];
  }

  return sum;
};

////////////////////////////////////////////////////////////////////////////////
// PRACTICE


console.log(missingNumber(nums))