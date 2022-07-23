n = 6

var climbStairs = function(n) {
    const steps = [0,1,2,3]
    
    for(let i = 4; i <= n; i++) {
        steps[i] = steps[i-1] + steps[i-2]
    }

    console.log(steps)
    
    return steps[n]
};

console.log(climbStairs(n))