nums = [-4,-1,0,3,10]

// easy way
// var sortedSquares = function(nums) {
//     return nums.map((num) => num**2).sort((a,b) => a - b)
// };

////////////////////////////////
// BEST WAY:
// the following uses two pointers technique
// Time complexity: O(n)
// Space complexity: O(n)

var sortedSquares = function(A) {
    let result = [];
    let l = 0;
    let r = A.length - 1;
    let p = r;

    while (l <= r) {
        if (A[l] ** 2 > A[r] ** 2) {
            result[p] = A[l] ** 2;
            p--
            l++
        } else {
            result[p] = A[r] ** 2;
            p--
            r--
        }
    }
    
    return result;
};

// below is same but with different notation (result[p--])

// var sortedSquares = function(A) {
//     let result = [];
//     let l = 0;
//     let r = A.length - 1;
//     let p = r;

//     while (l <= r) {
//         if (A[l] ** 2 > A[r] ** 2) {
//             result[p--] = A[l++] ** 2;
//         } else {
//             result[p--] = A[r--] ** 2;
//         }
//     }
    
//     return result;
// };


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(sortedSquares(nums))