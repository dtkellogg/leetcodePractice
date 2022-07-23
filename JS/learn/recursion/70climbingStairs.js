

// recursive solution - stepping down
// *** this unfortunately times out ***

const climbStairs  = n => {
    if (n <= 3) return n;
    return climbStairs(n-1) + climbStairs(n-2);
}
// recursive solution with memoization - stepping down

const climbStairs = n => {
    const cache = {};
    return climb(n, cache);
};

const climb = (n, cache) => {
    if (n in cache) {
        return cache[n];
    } else {
        if (n <= 3) return n;
        else {
            cache[n] = climb(n-1, cache) + climb(n-2, cache);
            return cache[n];
        }
    }
};
// iterative solution - stepping up

const climbStairs = n => {
    // we know that 3 steps returns 3
    if (n <= 3) return n;
    let arr = [1,2,3];
    for (let i = 3; i < n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr.pop();
}
// recursive solution - stepping up
// *** this unfortunately times out ***

const climbStairs = n => {
    return climb(0, n);
}
    
const climb = (step, destination) => {
    if (step > destination) return 0;
    if (step === destination) return 1;
    return climb(step+1, destination) + climb(step+2, destination);
};
// recursive solution with memoization - stepping up

const climbStairs = n => {
    const cache = {};
    return climb(0, n, cache);
};

const climb = (step, destination, cache) => {
    if (step in cache) {
        return cache[step];
    } else {
        if (step > destination) return 0;
        if (step === destination) return 1;
        else {
            cache[step] = 
                climb(step+1, destination, cache) + 
                climb(step+2, destination, cache);
            return cache[step];
        }
    }
};