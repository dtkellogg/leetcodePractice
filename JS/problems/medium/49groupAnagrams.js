strs = ["eat","tea","tan","ate","nat","bat"]

// 🔥🔥🔥
var groupAnagrams = function(strs) {
    let mapping = {}
    for (let str of strs) {
        let charCount = new Array(26).fill(0)
        for (let c of str) {
            charCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]++  // This is mapping the character code values to index values in the array.
        }
        if (!mapping[charCount]) mapping[charCount] = []
        mapping[charCount].push(str)
    }

    console.log(mapping)
    return Object.values(mapping)
};



////////////////////////////////////////////////////////////////
// Uses sort so a little slower:
// const groupAnagrams = strs => {
//     const map = {};
    
//     for (let str of strs) {
//         const key = [...str].sort();
        
//         console.log(`str: ${str}`)
//         console.log(`key: ${key}`)

//         if (!map[key]) {
//             map[key] = [];
//         }

//         map[key].push(str);

//         console.log("MAP:")
//         console.log(map)
//         console.log(`--------------------`)
//     }
    
//     return Object.values(map);
// };

// same as above, but w/o comments

// const groupAnagrams = strs => {
//     const map = {};
    
//     for (let str of strs) {
//         const key = [...str].sort();
        
//         if (!map[key]) {
//             map[key] = [];
//         }

//         map[key].push(str);
//     }
    
//     return Object.values(map);
// };

// PRACTICE
// const groupAnagrams = strs => {
//     const map = {};

//     for(let str of strs) {
//         const key = [...str].sort();
//         if(!map[key]) map[key] = [];
//         map[key].push(str);
//     }

//     return Object.values(map)
// }

console.log(groupAnagrams(strs))