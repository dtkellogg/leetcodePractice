nums = [1,2,3,4]


// my attempt:
// var runningSum = function(nums) {
//     desired = []
//     previous = 0
//     sum = 0

//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//         desired.push(sum)
//     }

//     return desired
// };

////////////////////////////////////////////////////////////////

// The strategy is pretty straight forward. We could maintain a variable as the prefix sum and update the final array with it.

// Here's a strategy to return a new array:
// const runningSum = nums => {
//   const LEN = nums.length;
//   const ret = new Int32Array(LEN);
//   ret[0] = nums[0];
//   for (let i = 1; i < LEN; ++i) {
//     ret[i] = ret[i - 1] + nums[i];
//   }
//   return ret;
// };

// And here's an inplace strategy:
// var runningSum = function(nums) {
//     for(let i=1;i<nums.length;i++){
//         nums[i]+=nums[i-1]
//     }
//     return nums
// };

// const runningSum = nums => {
    // nums.reduce((a,c,i) => nums[i] += a)  // this also works
//     nums.reduce((a,c,i,arr) => arr[i] += a)
//     return nums
// }

var runningSum = function(nums) {
/*
    The current array index is increamented by the accumlator which is the new value of arr[i]
    
    Example trace:
    
    input:
    [1,2,3,4]
    
        acc i  arr                return value
        0   0  1,2,3,4            0 + 1 = 1
        1   1  1,2,3,4            1 + 2 = 3
        3   2  1,3,3,4            3 + 3 = 6
end  => 6   3  1,3,6,4            6 + 4 = 10
        10  4  1,3,6,10
    
*/

console.log(nums.reduce((acc, _, i, arr) => arr[i] += acc ))
    nums.reduce((acc, _, i, arr) => arr[i] += acc )
    return nums
};

console.log(runningSum(nums))