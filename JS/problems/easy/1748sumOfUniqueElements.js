nums = [1,2,3,2]  // Output: 4

var sumOfUnique = function(nums) {
    let unique = new Set(nums),
        sum = 0

        console.log(unique)
    for(let key of unique.keys()) {
        sum += key
        console.log(`key: ${key}, sum: ${sum}`)
    }

    return sum
};

console.log(sumOfUnique(nums))