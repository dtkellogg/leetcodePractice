strs = ["flower","flow","flight"]
strs = [""]

var longestCommonPrefix = function(strs) {
    console.log(strs.length)
    if(!strs.length) return ""
    for(let i = 0; i < strs.length; i++) {
        if(strs.some((s) => s[i] !== strs[0][i])) {
            return strs[0].slice(0, i)
         }
    }
};

console.log(longestCommonPrefix(strs))