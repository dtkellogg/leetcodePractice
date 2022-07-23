nums = [0,1,0,3,12]

// var moveZeroes = function(nums) {
//     let count = 0
//     let zeros = []
    
//     for(let num of nums) {
//         if(num === 0) count++
//     }
    
//     zeros = "0".repeat(count)
    
    // return nums.filter((num) => num == 0)
// };

var moveZeroes = function(nums) {
    let zeroes = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1)
            zeroes++
        }
    }

    return [...nums, ...(new Array(zeroes)).fill(0)]
};

console.log(moveZeroes(nums))