nums = [1,2,3,4] // Output: [24,12,8,6]
nums = [-1,1,0,-3,3] // Output: [0,0,9,0,0]

// inefficient solution w/ map() and reduce()

// const productExceptSelf = function(nums) {
//      return nums.map(function (curr, i, arr) {
//          let temp = arr.slice()
//          temp.splice(i, 1)
//          return temp.reduce((product = 1, num) => product * num)
//         })
// };

////////////////////////////////

// efficient solution

var productExceptSelf = function(nums) {
  var output = [];
  var leftMult = 1;
  var rightMult = 1;

  console.log(`rightMult: ${rightMult}, leftMult: ${leftMult}`)
  console.log("---------------------------------------------------------------------------------------")

  for (var i=nums.length - 1; i >= 0; i--) {
    console.log(`i: ${i}, output[i]: ${output[i]}, rightMult: ${rightMult}`)

    output[i] = rightMult;
    rightMult *= nums[i];

    console.log("output:")
    console.log(output)
    console.log("-------------------------------------------------")
  }

  console.log("---------------------------------------------------------------------------------------")

  for (var j=0; j < nums.length; j++) {
    console.log(`j: ${j}, nums[j]: ${nums[j]}, output[j]: ${output[j]}, leftMult: ${leftMult}`)

    output[j] *= leftMult;
    leftMult *= nums[j];

    console.log("output:")
    console.log(output)
    console.log("-------------------------------------------------")
  }
  return output;
};



////////////////////////////////////////////////////////////////
// same as above, without comments

var productExceptSelf = function(nums) {
  var output = [];
  var leftMult = 1;
  var rightMult = 1;
  for (var i=nums.length - 1; i >= 0; i--) {
    output[i] = rightMult;
    rightMult *= nums[i];
  }
  for (var j=0; j < nums.length; j++) {
    output[j] *= leftMult;
    leftMult *= nums[j];
  }
  return output;
};



////////////////////////////////////////////////////////////////
// PRACTICE

var productExceptSelf = (nums) => {
  let product = nums.reduce((a,c) => {
    if(c !== 0) {
      return a * c
    }
  }, 1)

  console.log(`product: ${product}`)
  for(let i=0; i < nums.length; i++) {
    nums[i] = product / ( nums[i] === 0 ? 1 : nums[i])
  }

  return nums;
}

console.log(productExceptSelf(nums))