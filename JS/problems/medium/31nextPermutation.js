nums = [1,2,3] // Output: [1,3,2]
nums = [7, 2, 3, 1, 5, 4, 2, 3, 0] // Output: [7, 2, 3, 2, 0, 1, 3, 4, 5]

var nextPermutation = function(nums) {
    console.log("nums:")
    console.log(nums)
    console.log("--------------------------------------------------------------------------------------------------------------------------------")

    
    
    for(let i = nums.length-1; i >= 0; i--) {  // 1. u have to start from the end
        console.log(`i: ${i}, nums[i]: ${nums[i]}, nums[i+1]: ${nums[i+1]}`)

        if(nums[i] < nums[i+1]) {  // 2. if the num drops going down... like the 2 & 3 at @ idx 6,7 [7, 3, 3, 1, 5, 4, 2, 3, 0].. idx there is 6
            
            console.log(`i: ${i}, nums[i]: ${nums[i]}, nums[i+1]: ${nums[i+1]}`)
            console.log("IF")

            const large = nextLarge(i);
            swap(i, large);
            reverse(i+1);

            console.log(`i: ${i}, nums: ${nums[i]}, nums[i+1]: ${nums[i+1]}, large: ${large}`)
            console.log(nums)
            console.log("----------------------------------------------------------------")

            return nums
        }
    }
	
	// If there is no next permutation reverse the arr
    nums.reverse()
    
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    function reverse(idx) {
        let start = idx, end = nums.length-1;
        
        while(start < end) {
            swap(start, end);
            start++;
            end--;

            console.log("--------")
            console.log("Reverse fn")
            console.log(`start: ${start}, end: ${end}`)
            console.log(nums)
            console.log("--------")
        }
    }
    
    function nextLarge(idx) {
        for(let i = nums.length-1; i > idx; i--) {
            if(nums[i] > nums[idx]) {

                console.log("--------")
                console.log("Next Large fn")
                console.log(`i: ${i}, nums[idx]: ${nums[i]}`)
                console.log("--------")

                return i;
            }
        }
    }

};

// same as above, but w/o comments

// var nextPermutation = function(nums) {
    
//     for(let i = nums.length-1; i >= 0; i--) {
//         if(nums[i] < nums[i+1]) {
//             const large = nextLarge(i);
//             swap(i, large);
//             reverse(i+1);
//             return;
//         }
//     }
	
//     nums.reverse()
    
//     function swap(i, j) {
//         [nums[i], nums[j]] = [nums[j], nums[i]];
//     }
    
//     function reverse(idx) {
//         let start = idx, end = nums.length-1;
        
//         while(start < end) {
//             swap(start, end);
//             start++;
//             end--;
//         }
//     }
    
//     function nextLarge(idx) {
//         for(let i = nums.length-1; i > idx; i--) {
//             if(nums[i] > nums[idx]) {
//                 return i;
//             }
//         }
//     }
// };

// PRACTICE

const nextPermutation = (nums) => {
    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] < nums[i+1]) {
            const big = nextBig(i)
            swap(i, big)
            reverse(i+1)
            return
        }
    }

    function swap (i,j) {
        return [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    function reverse (idx) {
        let start = idx, end = nums.length-1;

        while(start < end) {
            swap(start, end)
            start++
            end--
        }
    }

    function nextBig (idx) {
        for(let i = nums.length - 1; i >= idx; i--) {
            if(nums[i] > nums[idx]) {
                return i
            }
        }
    }
}

console.log(nextPermutation(nums))