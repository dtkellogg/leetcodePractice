nums = [1,7,3,6,5,6]

// Solution #1:
// beats 26.36%, runtime 120ms

// var pivotIndex = function(nums) {
//     let sum = 0;
//     let sumsFromLeft = nums.map(x =>{
//     	sum+=x;
//     	return x;
//     });
//     for(let i=1, len = nums.length; i<len; i++){
//     	if(2*sumsFromLeft[i]===sum-nums[i]) return i;
//     }
//     return -1;
// };
// Solution #2：
// beats90.91%, runtime 80ms

// var pivotIndex = function(nums) {
//     let sum = nums.reduce((a,b)=>a+b, 0);
//     let sumL = 0;
//     for(let i=0, len=nums.length; i<len; i++){
//     	if(sumL === (sum-nums[i])/2) return i;
//     	sumL += nums[i];
//     }
//     return -1;
// };
// Solution #3:
// beats 100.00%, runtime 76ms

var pivotIndex = function(nums) {
    let sum = nums.reduce((a,b)=>a+b, 0);
    let sumL = 0, sumR = sum;
    for(let i=0; i<nums.length; i++){
        sumR -= nums[i];
    	if(sumL === sumR) return i;
    	sumL += nums[i];
    }
    return -1;
};
// I enjoyed the process of reducing runtiime. So I modified my code several times.
// The key to reduce runtime lies in less operations in the loop.

console.log(pivotIndex(nums))