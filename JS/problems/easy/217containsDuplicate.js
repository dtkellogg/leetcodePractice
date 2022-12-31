nums = [1,2,3,1]
nums = [1,2,3,4]

var containsDuplicate = function(nums) {
    console.log((new Set(nums)))
    console.log((new Map([nums])))

    return (new Set(nums)).size !== nums.length
};


////////////////////////////////
// THE FOLLOWING W/ MAP: doesn't work... makes a map with only one value

// var containsDuplicate = function(nums) {
//     console.log((new Map([nums])).size)
//     return (new Map([nums])).size !== nums.length
// };


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(containsDuplicate(nums))