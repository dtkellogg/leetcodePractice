s = "abcabcbb" // Output: 3
// s = "pwwkew" // Output: 3

// function lengthOfLongestSubstring(s) {
//   let seen = new Set();
//   let longest = 0;
//   let l = 0;
//   for (let r = 0; r < s.length; r++) {
//     while (seen.has(s[r])) {
//       seen.delete(s[l]);
//       l++;
//     }
//     seen.add(s[r]);
//     longest = Math.max(longest, r - l + 1);

//     console.log(`l: ${l}, r: ${r}, longest: ${longest}`)
//     console.log("seen:")
//     console.log(seen)
//     console.log("----------------------------------------------------------------")
//   }
//   return longest;
// };


// same as above, but w/o comments:

// function lengthOfLongestSubstring(s) {
//   let seen = new Set();
//   let longest = 0;
//   let l = 0;
//   for (let r = 0; r < s.length; r++) {
//     while (seen.has(s[r])) {
//       seen.delete(s[l]);
//       l++;
//     }
//     seen.add(s[r]);
//     longest = Math.max(longest, r - l + 1);
//   }
//   return longest;
// };




////////////////////////////////////////////////////////////////
// PRACTICE
function lengthOfLongestSubstring(s) {
  let seen = new Set(), l = 0, maxLen = 0;
  for(let r = 0; r < s.length; r++) {
    while(seen.has(s[r])) {
      seen.delete(s[l]);
      l++
    }
    maxLen = Math.max(maxLen, r - l + 1)
  }
  return maxLen;
}

console.log(lengthOfLongestSubstring(s))