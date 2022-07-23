coins = [1,2,5], amount = 11  // Output: 3
// coins = [2], amount = 3  // Output: -1
// coins = [1], amount = 2  //Output: 2

// Dynamic Programming

const coinChange = (coins, amount) => {
  // dp[i] represents the least amount of coins that can make the value equals to the i
  const dp = Array(amount + 1).fill(Infinity);  // +1 to make the case for zeros coins
  dp[0] = 0;

  //   console.log(`typeof dp[1]: ${typeof dp[1]}`)
  console.log("dp")
  console.log(dp)
  console.log("----------------------------------------------------------------")

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {

      console.log(`total$: ${i}; coin-value: ${coin}; dp[i]: ${dp[i]}; i - coin >= 0: ${i - coin >= 0}; i - coin: ${i - coin};`)

      if (i - coin >= 0) {
          console.log("IF")
          console.log(`dp[i]: ${dp[i]}; dp[i - coin] + 1: ${dp[i - coin] + 1}`)
        dp[i] = Math.min(
          dp[i],
          dp[i - coin] + 1,
        );
      }

      console.log("dp")
      console.log(dp)
      console.log("-------------------------------------")

    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

// same as above, but w/o comments

// const coinChange = (coins, amount) => {
//   const dp = Array(amount + 1).fill(Infinity);
//   dp[0] = 0;

//   for (let i = 1; i <= amount; i++) {
//     for (const coin of coins) {
//       if (i - coin >= 0) {
//         dp[i] = Math.min(
//           dp[i],
//           dp[i - coin] + 1,
//         );
//       }
//     }
//   }

//   return dp[amount] === Infinity ? -1 : dp[amount];
// };

// PRACTICE

var coinChange = (coins, amount) => {
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for(let i=0; i <= amount; i++) {
    for(let coin of coins) {
      if(i-coin >= 0) {
        dp[i] = Math.min(
          dp[i],
          dp[i-coin] + 1
        )
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DFS + Greedy + Pruning

// const coinChange = (coins, amount) => {
//   coins.sort((a, b) => b - a);

//   let res = Infinity;

//   const find = (k, amount, count) => {
//     const coin = coins[k];

//     // last smallest coin
//     if (k === coins.length - 1) {
//       if (amount % coin === 0) {
//         res = Math.min(res, count + ~~(amount / coin));
//       }
//     } else {
//       for (let i = ~~(amount / coin); i >= 0 && count + i < res; i--) { // count + i < res is for pruning, avoid unnecessary calculation
//         find(k + 1, amount - coin * i, count + i);
//       }
//     }
//   };

//   find(0, amount, 0);
//   return res === Infinity ? -1 : res;
// };

console.log(coinChange(coins, amount))