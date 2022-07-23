nums = [3,2,2,3], val = 3

var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val) nums.splice(nums.indexOf(val), 1)
    }

    
    return nums
};

console.log(removeElement(nums,val))