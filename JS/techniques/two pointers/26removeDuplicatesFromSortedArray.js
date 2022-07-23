nums = [1,1,2]  // Output: 2, nums = [1,2,_] .... Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. It does not matter what you leave beyond the returned k (hence they are underscores).
nums = [0,0,1,1,1,2,2,3,3,4]  // Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
nums = [1,1,2]  // Output: [1,2,_]
nums = [1,1,2, 2]  // Output:

var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        console.log(`i: ${i}, j: ${j}, nums[i]: ${nums[i]}, nums[j]: ${nums[j]}`)
        console.log(nums)
        console.log("--------------------------------")

        if (nums[j] != nums[i]) {

            console.log("IF")
            nums[++i] = nums[j];
        }

    }
    console.log("--------------------------------")
    console.log(nums)

    console.log(nums.slice(0, i) + 1)
    return ++i;
};

same as above, but w/o comments

var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    return ++i;
};




////////////////////////////////////////////////////////////////////////////////////////////////
// PRACTICE


var removeDuplicates = function(nums) {
}

console.log(removeDuplicates(nums))