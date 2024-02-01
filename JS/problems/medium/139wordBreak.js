s = "leetcode", wordDict = ["leet","code"] // Output: true

var wordBreak = function(s, wordDict) {
  const words = new Set(wordDict);
  const wordLens = new Set(wordDict.map((word) => word.length))
  const starts = new Set([0])

  // console.log("words:")
  // console.log(words)
  // console.log("wordLens:")
  // console.log(wordLens)
  // console.log("starts:")
  // console.log(starts)

  for (let start of starts) {
    for (let len of wordLens) {
      if (words.has(s.slice(start, start + len))) {
        starts.add(start + len)

        
      }
      console.log(`--------------------------------`)
      console.log(`start: ${start}`)
      console.log(`len: ${len}`)
      console.log("starts:")
      console.log(starts)
    }
  }
  return starts.has(s.length)
};

// same as algorithm above, but w/o comments
// var wordBreak = function(s, wordDict) {
//     const words = new Set(wordDict);
//     const wordLens = new Set(wordDict.map((word) => word.length))
//     const starts = new Set([0])

//     for (let start of starts) {
//         for (let len of wordLens) {
//             if (words.has(s.slice(start, start + len))) {
//                 starts.add(start + len)
//             }
//         }
//     }

//     return starts.has(s.length)
// };

// PRACTICE

// var wordBreak = (s, wordDict) => {
//     const words = new Set(wordDict)
//     const lens = new Set(wordDict.map(word => word.length))
//     let starts = new Set([0])
//     for(let start of starts) {
//         for(let len of lens) {
//             if(words.has(s.slice(start, start + len))) {
//                 starts.add(start + len)
//             }
//         }
//     }
//     return words.has(s.length)
// }

////////////////////////////////////////////////////////////////
// dynamic programming:

// const wordBreak = (s, wordDict) => {
//   if (wordDict == null || wordDict.length === 0) return false;

//   const set = new Set(wordDict);
//   const dp = Array(s.length + 1).fill(false);
//   dp[0] = true;

//   for (let end = 1; end <= s.length; end++) {
//     for (let start = 0; start < end; start++) {
//       const w = s.slice(start, end);
//       if (dp[start] === true && set.has(w)) {
//         dp[end] = true;
//         break;
//       }
//     }
//   }
//   return dp[s.length];
// };



console.log(wordBreak(s, wordDict))