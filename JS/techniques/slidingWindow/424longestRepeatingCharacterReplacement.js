s = "ABAB", k = 2  // Output: 4
// s = "AABABBA", k = 1 // Output: 4

// const characterReplacement = (s, k) => {
//   let left = 0;
//   let right = 0;
//   let maxCharCount = 0;
//   const visited = {};

//   while (right < s.length) {
//     const char = s[right];
//     visited[char] = visited[char] ? visited[char] + 1 : 1;

//     if (visited[char] > maxCharCount) maxCharCount = visited[char];

//     // if length of str minus the chars w/ highest count are greater than k, get rid of first char...
//     if (right - left + 1 - maxCharCount > k) {
//       visited[s[left]]--;
//       left++;
//     }

//     right++;

//     console.log(`left: ${left}, right: ${right}, char: ${char}, maxCharCount: ${maxCharCount}`)
//     console.log("visited:")
//     console.log(visited)
//     console.log("--------------------------------")
//   }

//   return right - left;
// };


// same as above, but w/o comments:
// const characterReplacement = (s, k) => {
//   let left = 0;
//   let right = 0;
//   let maxCharCount = 0;
//   const visited = {};

//   while (right < s.length) {
//     const char = s[right];
//     visited[char] = visited[char] ? visited[char] + 1 : 1;

//     if (visited[char] > maxCharCount) maxCharCount = visited[char];

//     if (right - left + 1 - maxCharCount > k) {
//       visited[s[left]]--;
//       left++;
//     }

//     right++;
//   }

//   return right - left;
// };


///////////////////////////////////////
// practice

const characterReplacement = (s, k) => {
}

console.log(characterReplacement(s,k))