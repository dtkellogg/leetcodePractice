nums = [1,1,1], k = 2 // Output: 2
nums = [1,2,3], k = 3 // Output: 2
nums = [1,2,3,3], k = 3 // Output: 3

// Hash Map
var subarraySum = function(nums, k) {
    let map = new Map();
    let sum = 0;
    let count = 0;
    map.set(0,1);
    for (let i=0; i<nums.length; i++) {
        sum += nums[i];

        console.log(`i: ${i}, nums[i]: ${nums[i]}, sum: ${sum}, sum-k: ${sum-k}`)

        if (map.has(sum-k)) count += map.get(sum-k);
        if (map.has(sum)) map.set(sum, map.get(sum)+1);
        else map.set(sum, 1);

        console.log(`count: ${count}`)
        console.log("map:")
        console.log(map)
        console.log("----------------------")
    }

    console.log(map)
    return count;
}

// Brute Force
// var subarraySum = function(nums, k) {
//     let counter = 0;
//     for (let i=0;i<nums.length;i++) {
//         let base = 0;
//         for (let j=i;j<nums.length;j++) {
//             base+=nums[j];
//             if (base == k) counter++;
//         }
//     }
//     return counter;
// };

console.log(subarraySum(nums, k))