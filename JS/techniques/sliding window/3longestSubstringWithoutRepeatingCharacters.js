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
  let l = 0, r = 0, seen = new Set(), maxLen = 0;

  while(r < s.length) {
    while(seen.has(s[r])) {
      seen.delete(s[l])
      l++
    }
    seen.add(s[r]);
    maxLen = Math.max(maxLen, r - l + 1)
    r++
  }

  return maxLen
}

console.log(lengthOfLongestSubstring(s))