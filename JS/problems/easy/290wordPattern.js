pattern = "abba", s = "dog cat cat dog"

// 🔥

var wordPattern = function(pattern, str) {
    const words = str.split(/\s+/);
    const map = new Map();
    
    if(words.length !== pattern.length) return false;
    if(new Set(words).size !== new Set(pattern).size) return false;
    
    for(let i = 0; i < pattern.length; i++) {
        if(map.has(pattern[i]) && 
           map.get(pattern[i]) !== words[i]) return false;
        map.set(pattern[i], words[i]);
    }
    return true;
};

////////////////////////////////////////////////////////////////
// this solution uses 2 maps:

// var wordPattern = function(pattern, str) {
//   const strArr = str.split(' ');
//   if (pattern.length !== strArr.length) return false;
//   const patMap = new Map();
//   const strMap = new Map();
//   for (let i = 0; i < pattern.length; i++) {
//     if (
//       (patMap.has(pattern[i]) && patMap.get(pattern[i]) !== strArr[i]) ||
//       (strMap.has(strArr[i]) && strMap.get(strArr[i]) !== pattern[i])
//     ) {
//       return false;
//     }
//     patMap.set(pattern[i], strArr[i]);
//     strMap.set(strArr[i], pattern[i]);
//   }
//   return true;
// };

console.log(wordPattern(pattern, s))