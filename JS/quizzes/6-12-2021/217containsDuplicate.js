nums = [1,2,3,1]

var containsDuplicate = function(nums) {
    let map = new Map()
    
    for(let i=0; i<nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i],1)
        }
    }

    console.log(map)
    console.log(`nums.length: ${nums.length}`)
    
    return map.size
    // return map.size !== nums.length
};

console.log(containsDuplicate(nums))