s = "eceba"  // Output: 3

// let lengthOfLongestSubstringTwoDistinct = s => {
//   let k = 2;
//   let map = new Map();
//   let max = 0;

//   for (let l = 0, r = 0; r <= s.length - 1; r++) {
//     // Step 1. count the characters
//     map.set(s.charAt(r), (map.get(s.charAt(r)) || 0) + 1);

//     // Step 2. clean up the map if condition does't match
//     while (map.size > k) {
//       let letter = s.charAt(l);
//       map.set(letter, map.get(letter) - 1);
//       if (map.get(letter) === 0) map.delete(letter); // that character count has become 0
//       l++;
//     }

//     // Step 3. condition matched, now update the result
//     max = Math.max(max, r - l + 1);
//   }

//   return max;
// };


////////////////////////////////////////////////////////////////
// PRACTICE
let lengthOfLongestSubstringTwoDistinct = s => {
  let l = 0, r = 0, maxLen = 0, seen = new Map();

  while(r < s.length) {
    while(seen.has(s[r])) {
      seen.set(s[r], seen.get(s[r]) - 1);
      if(seen.get(s[r]) === 0) seen.delete(s[r]);
      l++
    }
    seen.set(s[r], 1)
    maxLen = Math.max(maxLen, r - l + 1);
    r++
  }

  return maxLen
}

console.log(lengthOfLongestSubstringTwoDistinct(s))