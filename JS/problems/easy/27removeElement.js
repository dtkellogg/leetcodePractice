nums = [0,1,2,2,3,0,4,2], val = 2

var removeElement = function(nums, val) {
  let count = 0
    while (nums.includes(val)) {
        var index = nums.indexOf(val);
        if (index !== -1) {
            nums.splice(index, 1)
            count++
        }
      }
      console.log(count)
};

console.log(removeElement(nums, val))