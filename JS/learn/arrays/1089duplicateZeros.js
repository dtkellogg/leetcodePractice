// Note that elements beyond the length of the original array are not written.

Input: arr = [1,0,2,3,0,4,5,0]  // Output: null ... Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

var duplicateZeros = function(arr) {
    console.log(arr)
    console.log("--------------------------------------------------------------------------------------------------------------")
    
    for (var i=0; i<arr.length; i++) {

        console.log(`i: ${i}, arr[i]: ${arr[i]}`)
        
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.pop();
            i+=1
        }

        console.log(arr)
        console.log("--------------------------------------------------------")
    }
    
    console.log(arr)
};

// same code as above, but w/o comments

// var duplicateZeros = function(arr) {
    
//     for (var i=0; i<arr.length; i++) {
//         if (arr[i] === 0) {
//             arr.splice(i, 0, 0);
//             arr.pop();
//             i+=1
//         }
//     }
    
//     console.log(arr)
// };

console.log(duplicateZeros(arr))