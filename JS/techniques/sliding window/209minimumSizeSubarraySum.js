target = 7, nums = [2,3,1,2,4,3]  // Output: 2

var minSubArrayLen = function(s, nums) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let result = 0;
    
    while(right < nums.length) {
        sum += nums[right];

        console.log(`sum: ${sum}`)
        
        while(sum >= s) {
            console.log("----------------------------------------------------------------")
            console.log("sum is over")

            let len = right - left +1;
            if(result === 0 || len < result) result = len;
            sum -= nums[left];
            left++

            console.log(`left: ${left}, right: ${right}, sum: ${sum}, result: ${result}`)

        }
        right++;

        // console.log(`left: ${left}, right: ${right}, sum: ${sum}, result: ${result}`)
        // console.log("--------------------------------")

    }
    return result;
};



////////////////////////////////////////////////////////////////
//// same as above, but w/o comments
// var minSubArrayLen = function(target, nums) {
//     let left = 0;
//     let right = 0;
//     let sum = 0;
//     let result = 0;
    
//     while(right < nums.length) {
//         sum += nums[right];
        
//         while(sum >= target) {
//             let len = right - left + 1;
//             if(result === 0 || len < result) result = len;
//             sum -= nums[left];
//             left++
//         }
//         right++;
//     }
//     return result;
// };


///////////////////////////////////////////////////
// PRACTICE

var minSubArrayLen = function(target, nums) {
}

console.log(minSubArrayLen(target, nums))