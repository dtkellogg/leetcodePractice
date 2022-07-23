// n = 3  // Output: 3
n = 45

// 1. recursively solve:
var climbStairs = function(n) {
    
    const recurse = (n) => {
        if (n === 0 || n === 1) return 1
        return recurse(n-1) + recurse(n-2)
    }
    
    return recurse(n)
};





////////////////////////////////////////////////////////////////////////////////////////////////
// PRACTICE

var climbStairs = function(n) {
    return climbStairs(n) + climbStairs(n-1)
};

console.log(climbStairs(n))