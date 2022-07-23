nums = [3,0,1]

var missingNumber = function(nums) {
    let arr = (new Array(nums.length + 1)).fill(-1)

    console.log(arr)
    
    nums.sort((a,b) => a - b)

    console.log(nums)
    
    for(let i = 0; i < arr.length; i++) {
        if(i === nums[i]) {
            arr[i] = nums[i] 
        } else {
            i++
        }
    }

    console.log(arr)
    
    return arr.indexOf(-1) + 1
};

// var missingNumber = function(nums) {
//     const res = new Array(nums.length+1).fill(-1);
	
//     for(const num of nums) {
//         res[num] = num;
//     }

//     return res.indexOf(-1);
// };

console.log(missingNumber(nums))