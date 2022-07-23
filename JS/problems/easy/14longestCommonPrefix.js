strs = ["flower","flow","flight"]

// const longestCommonPrefix = function(strs) {
//     if(!strs.length) {
//         return '';
//     }

//     // looks through index of each word before changing index
//     for(let i = 0; i < strs[0].length; i++) {
//         for(let s of strs) {
//             if(s[i] !== strs[0][i]) {
//                 return s.slice(0, i);
//             }
//         }
//     }

//     return strs[0];
// };


// var longestCommonPrefix = function (strs) {
//     for (let i = 0; i < strs[0].length; i++)
//         if (strs.some((s) => s[i] != strs[0][i]))     // s[i] may be undefined so works
//             return strs[0].slice(0, i);

//     return strs[0];          // all equal strings, or empty string
// };

function longestCommonPrefix(strs) {
  for (var i = 0; i < strs[0].length; i++) {
    if(strs.some((s) => s[i] !== strs[0][i])) return strs[0].slice(0, i)
  }

  return strs[0]
}

console.log(longestCommonPrefix(strs))