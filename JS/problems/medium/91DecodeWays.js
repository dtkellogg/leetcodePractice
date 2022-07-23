s = "12"
s = "226"

// Synopsis:

// 🎨 The ART of Dynamic Programming

// 1. All possibilities are considered via top-down brute-force depth-first-search
// 2. Remember each subproblem's optimal solution via a DP memo
// 3. Turn the top-down solution upside-down to create the bottom-up solution

////////////////////////////////////////////////////////////////

// 1. All possibilities are considered via top-down brute-force depth-first-search

let numDecodings = s => {
    let N = s.length;
    let ok = x => 1 <= x && x <= 26;

    let go = i => {
        console.log(`i: ${i}, s[i]: ${s[i]}, N: ${N}`)

        if (i == N)
            return 1;
        let cnt = 0,
            one = Number(s[i]),
            two = one && i + 1 < N ? Number(s[i] + s[i + 1]) : 0;

            console.log(`i: ${i}, s[i]: ${s[i]}`)
            console.log(`one: ${one}`)
            console.log(`two: ${two}`)
            console.log(`cnt: ${cnt}`)
            
            if (ok(one)) cnt += go(i + 1);


        if (ok(two)) cnt += go(i + 2);
        console.log(`----------------------------------------------------------------`)
        return cnt;
    };
    return go(0);
};

// 2. Remember each subproblem's optimal solution via a DP memo

// let numDecodings = (s, m = new Map()) => {
//     let N = s.length;
//     let ok = x => 1 <= x && x <= 26;
//     let go = i => {
//         if (m.has(i))
//             return m.get(i);
//         if (i == N)
//             return 1;
//         let cnt = 0,
//             one = Number(s[i]),
//             two = one && i + 1 < N ? Number(s[i] + s[i + 1]) : 0;
//         if (ok(one)) cnt += go(i + 1);
//         if (ok(two)) cnt += go(i + 2);
//         return m.set(i, cnt).get(i);
//     };
//     return go(0);
// };

// 3. Turn the top-down solution upside-down to create the bottom-up solution

// let numDecodings = s => {
//     let N = s.length;
//     let dp = Array(N + 2).fill(0);
//     dp[N] = 1;
//     let ok = x => 1 <= x && x <= 26;
//     for (let i = N - 1; 0 <= i; --i) {
//         let one = Number(s[i]),
//             two = one && i + 1 <= N ? Number(s[i] + s[i + 1]) : 0;
//         if (ok(one)) dp[i] += dp[i + 1];
//         if (ok(two)) dp[i] += dp[i + 2];
//     }
//     return dp[0];
// };

// 4. Memory Optimization, ie. O(1) instead of O(N) via sliding window a = dp[i], b = dp[i + 1], c = dp[i + 2]

// let numDecodings = s => {
//     let N = s.length,
//         a = 0,
//         b = 1,
//         c = 0;
//     let ok = x => 1 <= x && x <= 26;
//     for (let i = N - 1; 0 <= i; --i) {
//         let one = Number(s[i]),
//             two = one && i + 1 <= N ? Number(s[i] + s[i + 1]) : 0;
//         a = 0;
//         if (ok(one)) a += b;
//         if (ok(two)) a += c;
//         c = b, b = a;
//     }
//     return a;
// };

console.log(numDecodings(s))