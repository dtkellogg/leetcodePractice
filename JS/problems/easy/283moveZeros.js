nums = [0,1,0,3,12]

// var moveZeroes = function(nums) {
//     var count = nums.length
    
//     for (let i = 0; i < count; i++) {
//         if (nums[i] === 0) {
//             const removed = nums.splice(i, 1);
//             nums.push(removed);
//             i--
//             count--
//         }
//     }
// };

function moveZeroes(nums) {
  var idx = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      nums[i] = idx === i ? nums[i] : 0;
      idx++;
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(moveZeroes(nums))