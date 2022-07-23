n = 3  // Output: 3

// 1. recursively solve:
// var climbStairs = function(n) {
    
//     const recurse = (n) => {
//         if (n === 0 || n === 1) return 1
//         return recurse(n-1) + recurse(n-2)
//     }
    
//     return recurse(n)
// };


////////////////////////////////////////////////////////////////
// 2. w/ memoization:
// var climbStairs = function(n) {
//     let memo = []
//     memo[0] = 1;  // base case
//     memo[1] = 1;  // base case
    
//     return recurse(n, memo)
// };

// const recurse = (n, memo) => { 
//         if (memo[n] > 0) return memo[n]  // if it's already been computed, just returned the memoized value
//         const waysToCurrentStair = recurse(n-1, memo) + recurse(n-2, memo)
//         memo[n] = waysToCurrentStair  // store it in memoization array
//         return waysToCurrentStair
// }

////////////////////////////////////////////////////////////////
// 3. flip it to use tablulation / iteration (bottom-up)

// var climbStairs = function(n) {
//     let dp = []  // u usually have an array holding solutions, and all u have to do is fill it up... find relation between current el and previous
//     dp[0] = 1;
//     dp[1] = 1;
//     for(let i = 2; i<= n; i++) {
//         dp[i] = dp[n-1] + dp[i-2]
//     }
//     return dp[n]
// }




////////////////////////////////////////////////
// PRACTICE

var climbStairs = function(n) {
}

console.log(climbStairs(n))