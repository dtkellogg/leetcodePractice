nums = [2,7,11,15], target = 9
nums = [3,2,4], target = 6
nums = [3,3], target = 6

// var twoSum = function(nums, target) {
//     for(let i=0; i < target.length; i++) {
//         for(let j=1; j < target.length-1; j++) {

//             console.log(`i: ${i}, j: ${j}`)
//             if(nums[i] === target - nums[j]) {
//                 return [i,j]
//             }

//         }
//     }
// };

var twoSum = function(nums, target) {
    const map = new Map()
    
    for(let num of nums) {
        map.set(num, nums.indexOf(num))
    }

    console.log(map)

    for(let i=0; i < nums.length; i++) {
        for(let [k, v] of map) {
            if(v !== i && k === target - nums[i]) {
                return [i, v]
            }
        }
    }
};

console.log(twoSum(nums, target));