n = 3

var climbStairs = function(n) {
    let arr = [0,1,2,3];
    for(let i = 4; i <= n; i++){
        arr[i] = arr[ i - 1] + arr[i - 2];
    }
    return arr[n];
};

// var climbStairs = function(n) {    
//     let prev = 0;
//     let cur = 1;
//     let temp;
    
//     for (let i = 0; i < n; i++) {
//         temp = prev;
//         prev = cur;
//         cur += temp; 
//     }
//     return cur;
// };


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

var climbStairs = function(n) {
}

console.log(climbStairs(n))