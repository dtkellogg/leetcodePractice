nums = [10,9,2,5,3,7,101,18]  // Output: 4


// dp:
function lengthOfLIS(nums) {
	var lis = [];
	for (var i = 0; i < nums.length; i++) {
    console.log("lis:")
    console.log(lis)

    
		lis.push(1);
		for (var j = 0; j < i; j++) {
			if (nums[j] < nums[i]) lis[i] = Math.max(lis[i], lis[j] + 1);
		}
	}
	return nums.length ? Math.max.apply(null, lis) : 0;
}

// same as above, but w/o comments

function lengthOfLIS(nums) {
	var lis = [];
	for (var i = 0; i < nums.length; i++) {
		lis.push(1);
		for (var j = 0; j < i; j++) {
			if (nums[j] < nums[i]) lis[i] = Math.max(lis[i], lis[j] + 1);
		}
	}
	return nums.length ? Math.max.apply(null, lis) : 0;
}

/////////////////////////////////////////////////////////////////
// Another solution:

// function lengthOfLIS(nums) {
//   if (!nums.length) return 0;

//   let arr = new Array(nums.length).fill(1);
	
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) arr[i] = Math.max(arr[i], arr[j] + 1);
//     }
//   }
  
//   return Math.max(...arr);
// }







////////////////////////////////////////////////////////////////
// practice

function lengthOfLIS(nums) {
}

console.log(lengthOfLIS(nums))