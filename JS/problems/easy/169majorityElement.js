nums = [3,2,3]
nums = [2,2,1,1,1,2,2]

// const majorityElement = (nums) => {
//   if (nums.length == 1) return nums[0];
//   const dictionaryObject = {};
//   for (let n of nums) {
//     dictionaryObject[n] = ~~dictionaryObject[n] + 1;
//     if (dictionaryObject[n] > nums.length / 2) return n;
//   }
//   return -1;
// }; // hashmap with object


////////////////////////////////////////////////////////////////
// FOUND DIFF BETWEEN MAP & OBJECT - CAN'T SET VALUE USING FALSELY || 1
////////////////////////////////////////////////////////////////
// var majorityElement = function(nums) {
//     var map = new Map()
    
//     for(let i=0; i<nums.length; i++) {
//         map.set(nums[i], nums[i] + 1 || 1)  // DOESN'T WORK
//         console.log(map)
        
//     }
//     if(map.get(nums[i]) > nums.length/2) return nums[i]
// };

//////

var majorityElement = function(nums) {
    var obj = {};
    
    for(var i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        if(obj[nums[i]] > nums.length / 2)  return nums[i];
    }
    
};


////////////////////////////////////////////////////////////////

// var majorityElement = function(nums) {
//     var obj = {};
    
//     for(var i = 0; i < nums.length; i++){
//         obj[nums[i]] = obj[nums[i]] + 1 || 1; // if obj[nums[i]] is defined, he increments it.                                                    Otherwise set it to 1.

//         if(obj[nums[i]] > nums.length / 2)  return nums[i];
//     }
    
// };


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

var majorityElement = function(nums) {
}

console.log(majorityElement(nums))