nums = [1,2,3,1,1,3]  // Output: 4  .... Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// time O(N^2) space O(1)
//  var numIdenticalPairs = function(nums) {
//      let count = 0
    
//      for(let i=0; i<nums.length; i++) {
//          for(let j=i+1; j<nums.length; j++) {
//              if(nums[i] === nums[j]) {
//                  count++
//              }
//          }
//      }
    
//      return count
//  };
// time O(N) space O(N)
var numIdenticalPairs = function(nums) {
    const map = {}
    let count = 0

    console.log(nums)
    console.log("--------------------------------------------------------------")
    
    for (const number of nums) {
        console.log(`number: ${number}, map[number]: ${map[number]}, count: ${count}`)
        if (map[number]) {
            count += map[number];
            map[number] += 1;
        } else {
            map[number] = 1;
        }

        console.log("--------------------------------")
    }
    return count
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(numIdenticalPairs(nums))