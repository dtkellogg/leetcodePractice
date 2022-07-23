s = "leetcode"

// var firstUniqChar = function(s) {
//    for(i=0;i<s.length;i++){
//        if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
//           return i;
//       } 
//    }
//    return -1;
// };


// var firstUniqChar = function(s) {
//     const charMap = new Map()
    
//     s.split("").map((char) => {
//         if(charMap.has(char)) {
//             charMap.set(char, charMap.get(char) + 1)
//         } else {
//             charMap.set(char, 1)
//         }
//     })

//     console.log(charMap)

//     for (const [k, v] of charMap) {
//         if (v === 1) return s.indexOf(k)
//     }

//     return -1
// };


// below doesn't work - for(let char in s.split("")) uses the indicies of the chars [0,1,2,3,4,5,6,7,8]
var firstUniqChar = function(s) {
    const map = new Map()
    
    for(let char in s.split("")) {
        if(map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }

    console.log(map)

    
    for(let [k,v] of map) {
        if(v === 1) return k
    }
    
    return -1
};

console.log(firstUniqChar(s))