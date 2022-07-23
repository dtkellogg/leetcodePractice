n = 5

var climbStairs = function(n) {
    let steps = [0,1,2,3]
    for(let i = 4; i <= n; i++) {
        steps[n] = steps[i-1] + steps[i-2] 

    }
    return steps
};

console.log(climbStairs(n))