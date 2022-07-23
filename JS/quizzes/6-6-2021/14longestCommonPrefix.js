strs = ["flower","flow","flight"]

var longestCommonPrefix = function (strs) {
    if (!strs.length) return "";
    
   for(let i=0; i<strs[0].length; i++) {
       if(strs.some((s) => s[i] !== strs[0][i])) {
          return strs[0].slice(0, i)
      }
      
    }
    return strs[0]
};

// var longestCommonPrefix = function (strs) {
//     if (!strs.length) return "";

// //     for (let i = 0; i < strs[0].length; i++)
//         if (strs.some((s) => s[i] != strs[0][i]))     // s[i] may be undefined so works
//             return strs[0].slice(0, i);

//     return strs[0];          // all equal strings, or empty string
// };

console.log(longestCommonPrefix(strs))