nums = [1,1,0,1,1,1]
// nums = [1,0,1,1,0,1]  // Output: 2

// var findMaxConsecutiveOnes = function(nums) {
//     let start=0;
//     let max=0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===0) start=i+1;  // start position starts over if there is a zero.
// 		if(i-start+1 > max) max = i-start+1;
//         // max=Math.max(i-start+1,max); // you could do this as well but its inbuilt method


//         console.log(`i: ${i}, start: ${start}, max: ${max}`)
//         console.log("--------------------------------")
//     }
//     return max;
// };

// same as above, but w/o comments
var findMaxConsecutiveOnes = function(nums) {
    let start=0;
    let max=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0) start=i+1;
		    if(i-start+1 > max) max = i-start+1;
        // max=Math.max(i-start+1,max); // you could do this as well but its inbuilt method
    }
    return max;
};

////////////////////////////////////////////////////////////////
// PRACTICE

var findMaxConsecutiveOnes = function(nums) {
}

console.log(findMaxConsecutiveOnes(nums))