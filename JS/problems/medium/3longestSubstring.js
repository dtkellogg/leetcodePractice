s = "abcabcbb"
// s = "pwwkew"

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

//     console.log(`l: ${l}, r: ${r}, s[l]: ${s[l]}, s[r]: ${s[r]}, longest: ${longest}`)
//     console.log("seen")
//     console.log(seen)
//     console.log("--------------------------")
//   }
//   return longest;
// };

////////////////////////////////////////////////////////////////
// same as above, but w/o comments

// sliding window:
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







// PRACTICE

function lengthOfLongestSubstring(s) {
    let seen = new Set();
    let l = 0;
    let longest = 0;

    for (let r = 0; r < s.length; r++) {
        if(seen.has(s[r])) {
            seen.delete(s[l])
            l++
        }
        seen.add(s[r])

        longest = Math.max(longest, r - l + 1);

    }
    return longest;
}


////////////////////////////////////////////////////////////////
// const lengthOfLongestSubstring = s => {
//     // keeps track of the most recent index of each letter.
//     const map = {};
//     // keeps track of the starting index of the current substring.
//     var left = 0;

//     console.log(`str: ${s}`)
//     console.log("---------------------------------------------------------------------------------------")
    
//     return s.split('').reduce((max, v, i) => {
//         console.log(`i: ${i}, v: ${v}, map[v]: ${map[v]}, left: ${left}, max: ${max},`)
//         console.log("map:")
//         console.log(map)
//         console.log("------------------------------------------------")

//         // starting index of substring is 1 + (the last index of this letter) to ensure this letter is not counted twice.
//         left = map[v] >= left ? map[v] + 1 : left;
//         // updates last recorded index of letter to the most recent index.
//         map[v] = i;

        
//         // indices of current substring is (idx - leftIdx, idx).
//         // +1 because if your substring starts and ends at index 0, it still has a length of 1.
//         return Math.max(max, i - left + 1);
//     }, 0)
// };

////////////////////////////////////////////////////////////////
// same as above, just w/o comments
// const lengthOfLongestSubstring = s => {
//     const map = {};
//     var left = 0;
    
//     return s.split('').reduce((max, v, i) => {
//         left = map[v] >= left ? map[v] + 1 : left;
//         map[v] = i;
//         return Math.max(max, i - left + 1);
//     }, 0)
// };


// PRACTICE
// const lengthOfLongestSubstring = (s) => {
//     let map = {};
//     let left = 0;
//     return s.split("").reduce((max,v,i) => {
//         left = map[v] >= left ? map[v] + 1 : left
//         map[v] = i
//         return Math.max(max, i - left + 1)
//     },0)    
// }

// console.log(lengthOfLongestSubstring(s))

let A = ['hello']
let B  = A
B.push('you')


let C = 4
let D = C
D = D + 5

console.log(C, D)