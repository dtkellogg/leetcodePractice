Input: n = 4  // Output: 3 ... Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

/**
 * @param {number} n
 * @return {number}
 */
// recursive solution
// time - O(2^n) - 100ms
// space - O(n)

const fib = N => {
    return (N < 2) 
        ? N 
        : fib(N-2) + fib(N-1);
};
// DP recursive solution w/ memoization
// time - O(n) - 52ms
// space - O(n)

const fib = N => {
    const memo = {};
    return fibRec(N, memo);
};

const fibRec = (N, memo) => {
    if (memo[N])   return memo[N];
    else {
        if (N < 2)   return N;
        else {
            memo[N] = fibRec(N-1, memo) + fibRec(N-2, memo);
            return memo[N];
        }
    }
};
// DP recursive solution w/ memoization (simpler)
// time - O(n) - 52ms
// space - O(n)

const fib = (N, memo) => {
    memo = memo || {};
    
    if (memo[N])   return memo[N];
    if (N < 2)   return N;
	
    return memo[N] = fib(N-1, memo) + fib(N-2, memo);
};
// DP recursive solution w/ memoization (using new Map())
// time - O(n) - 48ms
// space - O(n)

const fib = (N, memo) => {
    memo = memo || new Map();
    
    if (memo.has(N))   return memo.get(N);
    if (N < 2)   return N;
        
    memo.set(N, fib(N-1, memo) + fib(N-2, memo));
    return memo.get(N);
};

console.log(fib(N,memo))