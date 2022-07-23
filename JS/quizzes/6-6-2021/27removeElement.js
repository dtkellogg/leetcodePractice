nums = [3,2,2,3], val = 3

// var removeElement = function(nums, val) {
//     return nums.filter((num) => num !== val)
// };

var removeElement = function(nums, val) {
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === val) nums[i] = ""
    }
    
    return nums.join("")
};

console.log(removeElement(nums, val))