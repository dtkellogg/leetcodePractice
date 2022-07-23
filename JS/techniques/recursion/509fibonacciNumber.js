n = 2
n = 5

// iterative solution
// time - O(n) - 48ms
// space - O(1)

// const fib = N => {
//     let arr = [0, 1];
    
//     for (let i = 2; i <= N; i++) {
//         arr.push(arr[i-2] + arr[i-1]);
//     }
    
//     return arr[N];
// };


////////////////////////////////////////////////////////////////////////////////
// DP iterative solution w/ memoization (bottom up)
// time - O(n) - 48ms
// space - O(1)

// const fib = N => {
//     const memo = {};
//     for (let i = 0; i <= N; i++) {
//         if (i < 2)   memo[i] = i;
//         else memo[i] = memo[i-2] + memo[i-1];
//     }

//     console.log("memo:")
//     console.log(memo)

//     return memo[N];
// }


////////////////////////////////////////////////////////////////////////////////
// 🔥🔥🔥 recursive solution
// time - O(2^n) - 100ms
// space - O(n)

// const fib = N => {
//     return (N < 2) 
//         ? N 
//         : fib(N-2) + fib(N-1);
// };

////////////////////////////////////////////////////////////////////////////////
// DP recursive solution w/ memoization
// time - O(n) - 52ms
// space - O(n)

// const fib = N => {
//     const memo = {};
//     return fibRec(N, memo);
// };

// const fibRec = (N, memo) => {
//     if (memo[N])   return memo[N];
//     else {
//         if (N < 2)   return N;
//         else {
//             memo[N] = fibRec(N-1, memo) + fibRec(N-2, memo);
//             return memo[N];
//         }
//     }
// };


////////////////////////////////////////////////////////////////////////////////
// DP recursive solution w/ memoization (simpler)
// time - O(n) - 52ms
// space - O(n)

// const fib = (N, memo) => {
//     memo = memo || {};
    
//     if (memo[N])   return memo[N];
//     if (N < 2)   return N;
	
//     return memo[N] = fib(N-1, memo) + fib(N-2, memo);
// };


////////////////////////////////////////////////////////////////////////////////
// DP recursive solution w/ memoization (using new Map())
// time - O(n) - 48ms
// space - O(n)

// const fib = (N, memo) => {
//     memo = memo || new Map();
    
//     if (memo.has(N))   return memo.get(N);
//     if (N < 2)   return N;
        
//     memo.set(N, fib(N-1, memo) + fib(N-2, memo));
//     return memo.get(N);
// };







/////////////////////////////////
// PRACTICE
const fib = (n) => {
}

console.log(fib(n))